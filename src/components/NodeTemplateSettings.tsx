import { createContext, FC, useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { block, ObjectKeys, step } from "../types";
import { Arrow, Settings as SettingsIcon } from "../svg";

import { Controller, FormProvider, useForm, useWatch } from "react-hook-form";

import { CodeEditor } from "./CodeEditor";
import { ToggleSidebar } from "./Sidebar";
import { Button } from "./Button";
import { getTemplateNode } from "../models/getTemplateNode";
import { updateTemplateNode } from "../redux/api";
import { actions, selectActiveDrawflow } from "../redux/drawflowSlice";
import { capitalize, mapKeyToDisplayName } from "../models/tools";
import { Flow } from "../redux/Flow";

const templateNode = getTemplateNode();

interface settingsContext {
  type: "template" | "node";
}

const NodeSettingsContext = createContext<settingsContext>({
  type: "template",
});

const NodeSettingsDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  flex: 1;
`;
const LeftBarForm = styled.form`
  min-width: 300px;
`;
const TitleDiv = styled.div`
  font-weight: bold;
`;

const DescriptionDiv = styled.div``;

const TitleInfoDiv = styled.div`
  display: grid;
  gap: 0.3em;
`;

const LeftBarHeader = styled.header<{ shift: boolean }>`
  padding: 10px;
  display: flex;
  align-items: center;
  color: #1f1a1a;
  order: -1;
  position: relative;
  ${({ shift }) =>
    shift &&
    css`
      padding-left: 0;
    `}
`;
const TitleImg = styled.img`
  padding: 8px;
  margin-right: 10px;
  border: 3px solid #8db6f6;
  border-radius: 15px;
  max-height: 50px;
  max-width: 50px;
`;

const Details = styled.details`
  summary svg {
    transform: rotate(-90deg);
  }

  &[open] > summary:first-child svg {
    transform: rotate(90deg);
  }

  summary ~ * {
    margin-left: 10px;
  }
`;

const DefaultSettingsDetails = styled(Details)``;

const Summary = styled.summary`
  color: #e0ebfd;
  background-color: #8db6f6;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 30px;
  margin-top: 0.05em;
`;

const ArrowSpan = styled.span`
  display: grid;
  place-items: center;

  svg {
    height: 1em;
    width: 1.4em;
  }
`;

const ItemSettingLabel = styled.label`
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 2px solid blue;
`;

const ListSettingsDiv = styled.div``;

// eslint-disable-next-line react/prop-types
const SelectorButton = styled.button``;

const NodeSettingsWrapper = styled.div`
  flex: 1;
  height: max-content;
`;

const ToggleSidebarDiv = styled.div`
  margin-left: -0.2em;
`;
const SaveButton = styled(Button)``;

const DeleteButton = styled(Button)``;
const ResetButton = styled(Button)``;

const ControlsDiv = styled.div`
  text-align: center;
`;

const StyledSummary: FC = ({ children }) => {
  return (
    <Summary>
      <ArrowSpan>
        <Arrow />
      </ArrowSpan>
      <span>{children}</span>
    </Summary>
  );
};

const RightBar = ({
  setFormValues,
  control,
  remount,
  defaultValue,
}: {
  setFormValues: (p: block) => void;
  control: any;
  remount: () => void;
  defaultValue: block;
}) => {
  const values = useWatch({ control, defaultValue });
  const [edited, setEdited] = useState<boolean>(false);

  return (
    <div onMouseLeave={() => edited && remount()}>
      <CodeEditor
        values={values}
        setValues={(data) => {
          setEdited(true);
          setFormValues(data);
        }}
      />
    </div>
  );
};
const Selector = () => {
  return <SettingsIcon />;
};

const defaultSettingsMap = {};

function setPropDyn(obj: Record<string, any>, arr: string[], value: string) {
  //Modifies object
  let i = 0;
  for (; i < arr.length - 1; i++) {
    obj = obj[arr[i]];
  }
  if (typeof obj[arr[i]] === "string") {
    obj[arr[i]] += value;
  }
}

const getNestedObjectField = (obj: Record<string, any>, props: string[]) => {
  for (const propName of props) {
    if (!(propName in obj)) {
      return undefined;
    }
    obj = obj[propName];
  }
  return obj;
};

const SettingItem = ({ path }: any) => {
  const key = path[path.length - 1];
  const keyPath = `${path.join(".")}`;

  const validate = (value: any) => {
    const valid =
      key in templateNode && value !== null
        ? // @ts-ignore
          typeof templateNode[key] === typeof value
        : true;
    if (!valid) {
      // @ts-ignore
      console.log({ key, value, properValue: templateNode[key] });
    }
    // console.log(valid);
    return valid;
  };

  const keyName = capitalize(key.replace(/_/g, " "));
  return (
    <ItemSettingLabel>
      {keyName}:
      <Controller
        name={keyPath}
        render={({ field }) => {
          const { value } = field;
          const isNull = value === null;
          validate(value);

          //@ts-ignore
          const typeVal = key in templateNode ? templateNode[key] : value;
          let type =
            typeof typeVal === "string" || isNull ? "text" : typeof typeVal;

          return (
            <input
              type={type}
              {...field}
              value={value ?? ""}
              onChange={(e) => {
                const { value } = e.target;
                // console.log(value);
                field.onChange(type === "number" ? parseInt(value) : value);
              }}
            />
          );
        }}
      />
    </ItemSettingLabel>
  );
};

export const FormSettings = ({
  path,
  obj,
}: {
  path: Array<string>;
  obj: any;
}) => {
  if (typeof obj !== "object" || obj === null) {
    return <SettingItem path={path} />;
  }

  const items = ObjectKeys(obj as Record<any, unknown>).map((key) => {
    const value = obj[key];
    return (
      <FormSettings
        key={[...path, key].join(".")}
        path={[...path, key]}
        obj={value}
      />
    );
  });
  const key = path[path.length - 1];

  const keyName =
    // @ts-ignore
    mapKeyToDisplayName[key] ?? capitalize(key.replace(/_/g, " "));
  return (
    <Details>
      <StyledSummary>{keyName}</StyledSummary>
      <ListSettingsDiv>{items}</ListSettingsDiv>
    </Details>
  );
};

const NodesChooserDetails = styled(Details)`
  position: relative;

  summary ~ * {
    margin-left: 0;
  }
`;
const ListChooserDiv = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  width: max-content;
  max-width: 30vw;
  padding: 10px;
  background-color: #f5f0e5;
  border: 3px solid #3883fa;
  border-radius: 10px;
`;

const SelectNodeSettingsItem = styled.div`
  cursor: pointer;
  margin-top: 0.2em;
  padding: 0.4em;
  border-radius: 0.3em;
  background: #8db6f6;

  &:hover {
    background: #3377e4;
  }
`;

const NodeJumpControlsDiv = styled.div``;

const NodeJumpControls = ({ id }: { id: number }) => {
  const state = useAppSelector(selectActiveDrawflow);
  const flow = new Flow(state);
  const node = flow.getNode(id);
  const { subnodes, out1 } = node;
  const prevNodes = [];
  let nextParent = node.parent;
  while (nextParent) {
    prevNodes.push(nextParent);
    nextParent = nextParent.parent;
  }

  const SubnodesChooser = (
    <NodesChooserDetails>
      <StyledSummary>Subnodes</StyledSummary>
      <ListChooserDiv>
        {subnodes.map(
          ({
            nodeState: {
              positionNumber,
              id,
              data: { name },
            },
          }) => (
            <SelectNodeSettingsItem key={id}>
              {name} #{id}:{positionNumber}
            </SelectNodeSettingsItem>
          )
        )}
      </ListChooserDiv>
    </NodesChooserDetails>
  );

  const NextNodesChooser = (
    <NodesChooserDetails>
      <StyledSummary>Next nodes</StyledSummary>
      <ListChooserDiv>
        {out1.map(
          ({
            nodeState: {
              positionNumber,
              id,
              data: { name },
            },
          }) => (
            <SelectNodeSettingsItem key={id}>
              {name} #{id}:{positionNumber}
            </SelectNodeSettingsItem>
          )
        )}
      </ListChooserDiv>
    </NodesChooserDetails>
  );

  const PrevNodesChooser = (
    <NodesChooserDetails>
      <StyledSummary>Prev nodes</StyledSummary>
      <ListChooserDiv>
        {prevNodes.map(
          ({
            nodeState: {
              positionNumber,
              id,
              data: { name },
            },
          }) => (
            <SelectNodeSettingsItem key={id}>
              {name} #{id}:{positionNumber}
            </SelectNodeSettingsItem>
          )
        )}
      </ListChooserDiv>
    </NodesChooserDetails>
  );

  return (
    <NodeJumpControlsDiv>
      {SubnodesChooser}
      {NextNodesChooser}
    </NodeJumpControlsDiv>
  );
};
type formType = block | step;
export const LeftBar = (props: {
  defaultValues: formType;
  setControl: (p: any) => void;
}) => {
  const { type } = useContext(NodeSettingsContext);
  const dispatch = useAppDispatch();
  const { defaultValues, setControl } = props;
  const methods = useForm({ defaultValues });
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    getValues,
  } = methods;

  useEffect(() => {
    setControl(control);
  }, []);

  const values = defaultValues;
  const { name, description, icon_link } = values;
  const sidebarVisible = useAppSelector((s) => s.sidebarVisible) ?? true;

  const onSubmit = (data: formType) => {
    type === "template" && dispatch(updateTemplateNode(data));
    type === "node" && dispatch(actions.updateNode(data as step));
  };

  const onDelete = () => {
    type === "template" &&
      dispatch(updateTemplateNode({ ...getValues(), delete: 1 }));
    // type === "node" &&
    //   dispatch(updateTemplateNode({ ...getValues(), delete: 1 }));
  };

  // console.log(defaultValues);

  return (
    <FormProvider {...methods}>
      <LeftBarForm onSubmit={handleSubmit(onSubmit)}>
        <LeftBarHeader shift={!sidebarVisible}>
          {!sidebarVisible && (
            <ToggleSidebarDiv>
              <ToggleSidebar />
            </ToggleSidebarDiv>
          )}
          <TitleImg src={icon_link} />
          <TitleInfoDiv>
            <TitleDiv>{name}</TitleDiv>
            <DescriptionDiv>{description}</DescriptionDiv>
          </TitleInfoDiv>
          {type === "node" && (
            <NodeJumpControls
              id={(defaultValues as step).this_node_unique_id}
            />
          )}
        </LeftBarHeader>
        <DefaultSettingsDetails open={true}>
          <StyledSummary>Default settings</StyledSummary>
          <ListSettingsDiv>
            {Object.entries(values).map(([key, value]) => {
              if (
                (typeof value !== "object" || value === null) &&
                !(key in mapKeyToDisplayName)
              ) {
                return <SettingItem key={key} path={[key]} />;
              }
              return null;
            })}
          </ListSettingsDiv>
        </DefaultSettingsDetails>
        {ObjectKeys(mapKeyToDisplayName).map((key) => {
          return values[key] ? (
            <FormSettings key={key} obj={values[key]} path={[key]} />
          ) : null;
        })}
        {Object.keys(errors).length && (
          <div>
            <pre>Errors</pre>
          </div>
        )}
        <ControlsDiv>
          <SaveButton type="submit">Save</SaveButton>
          <ResetButton type="reset" onClick={() => reset()}>
            Reset
          </ResetButton>
          <DeleteButton type="button" onClick={() => onDelete()}>
            Delete
          </DeleteButton>
        </ControlsDiv>
      </LeftBarForm>
    </FormProvider>
  );
};

const Settings = ({ json }: { json: any }) => {
  const [leftBarKey, setLeftBarKey] = useState(0);
  const [rightBarKey, setRightBarKey] = useState(0);
  const [defaultValues, setDefaultValues] = useState(json);
  const [control, setControl] = useState();

  return (
    <NodeSettingsWrapper>
      <NodeSettingsDiv>
        <LeftBar
          key={`leftBar-${leftBarKey}`}
          defaultValues={defaultValues}
          setControl={setControl}
        />
        {control && (
          <RightBar
            key={`rightBar-${rightBarKey}`}
            remount={() => {
              setRightBarKey((key) => key + 1);
            }}
            setFormValues={(newData: block) => {
              setDefaultValues(newData);
              setLeftBarKey((key) => key + 1);
            }}
            control={control}
            defaultValue={defaultValues}
          />
        )}
      </NodeSettingsDiv>
    </NodeSettingsWrapper>
  );
};

export const NodeSettings = ({ id }: { id: number }) => {
  const json = useAppSelector((s) => selectActiveDrawflow(s).drawflow[id].data);
  // console.log(json);
  return (
    <NodeSettingsContext.Provider value={{ type: "node" }}>
      <Settings json={json} />
    </NodeSettingsContext.Provider>
  );
};

export const TemplateNodeSettings = ({ id }: { id: number }) => {
  const json = useAppSelector((s) =>
    s.templates.find(({ nodes_id }) => nodes_id === id)
  );
  if (json === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <NodeSettingsContext.Provider value={{ type: "template" }}>
      <Settings json={json} />
    </NodeSettingsContext.Provider>
  );
};
