import {
  createContext,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { block, ObjectKeys, step } from "../../types";
import { Plus, SettingsIcon as SettingsIcon } from "../../svg";

import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";

import { CodeEditor } from "../CodeEditor";
import { ToggleSidebar } from "../Sidebar";
import { getTemplateNode } from "../../models/getTemplateNode";
import { updateTemplateNode } from "../../redux/api";
import { actions, selectActiveDrawflow } from "../../redux/drawflowSlice";
import { capitalize, mapKeyToDisplayName } from "../../models/tools";
import { NodeJumpControls } from "./NodeJumpControls";
import { Flow } from "../../redux/Flow";
import Node from "../../redux/Node";
import {
  ControlsDiv,
  DefaultSettingsDetails,
  DeleteButton,
  DescriptionDiv,
  Details,
  ItemSettingLabel,
  LeftBarForm,
  LeftBarHeader,
  ListSettingsDiv,
  NodeSettingsDiv,
  NodeSettingsWrapper,
  ResetButton,
  RightInputDiv,
  SaveButton,
  SelectJparamDiv,
  SelectorButton,
  SelectorJparamDiv,
  SelectorJparamOptionsDiv,
  StyledSummary,
  TitleDiv,
  TitleImg,
  TitleInfoDiv,
  ToggleSidebarDiv,
} from "./StyledComponents";
import { useClickOutside } from "../../hooks/useClickOutside";

const templateNode = getTemplateNode();

interface settingsContext {
  type: "template" | "node";
}

export const NodeSettingsContext = createContext<settingsContext>({
  type: "template",
});

export const FormSettingsContext = createContext<{
  setFormValues: null | ((p: any) => void);
}>({
  setFormValues: null,
});

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
export const FormSettings = ({
  path,
  obj,
  RenderElement,
}: {
  path: Array<string>;
  obj: any;
  RenderElement: FC<{ path: any }>;
}) => {
  if (typeof obj !== "object" || obj === null) {
    return <RenderElement path={path} />;
  }

  const items = ObjectKeys(obj as Record<any, unknown>).map((key) => {
    const value = obj[key];
    return (
      <FormSettings
        key={[...path, key].join(".")}
        path={[...path, key]}
        obj={value}
        RenderElement={RenderElement}
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
const getNestedObjectField = (obj: Record<string, any>, props: string[]) => {
  for (const propName of props) {
    if (!(propName in obj)) {
      return undefined;
    }
    obj = obj[propName];
  }
  return obj;
};

const SelectorJparam = ({
  pathToFieldValue,
}: {
  pathToFieldValue: string[];
}) => {
  const [opened, setOpened] = useState(false);
  const { getValues, setValue } = useFormContext();
  const values = getValues() as step;
  const jparam_settings = (values.node_settings_json.jparam_settings ??
    []) as any[];
  const id = values.this_node_unique_id;

  const state = useAppSelector(selectActiveDrawflow);
  const flow = new Flow(state);
  const node = flow.getNode(id);
  const { prevDirectNodes } = node;

  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => opened && setOpened(false), !opened);

  return (
    <SelectorJparamDiv ref={ref}>
      <SelectorButton onClick={() => setOpened(!opened)}>
        <SettingsIcon height={15} />
      </SelectorButton>
      {opened && (
        <SelectorJparamOptionsDiv>
          <Details>
            <StyledSummary>Prev nodes</StyledSummary>
            {prevDirectNodes.length > 0 && (
              <ListSettingsDiv style={{ zIndex: 2 }}>
                {prevDirectNodes.map(
                  ({ nodeState: { positionNumber, id, data } }: Node) => {
                    const RenderElement = ({ path }: any) => {
                      const key = path[path.length - 1];
                      const value = useAppSelector((s) => {
                        const state = selectActiveDrawflow(s);
                        const { data } = state.drawflow[id];
                        return getNestedObjectField(data, path);
                      });
                      return (
                        <SelectJparamDiv>
                          <span
                            onClick={() => {
                              const replace_tag = `&%jparam:${values.this_node_unique_id}:${jparam_settings.length}%&`;
                              const newParam = {
                                replace_this_element: pathToFieldValue
                                  .slice(1)
                                  .join(","),
                                replace_tag,
                                with_this_element_value: {
                                  node_unique_id: id,
                                  settings: Number(
                                    "node_settings_json" === pathToFieldValue[0]
                                  ),
                                  parameter: path.slice(1).join(","),
                                },
                              };
                              jparam_settings.push(newParam);
                              setValue(
                                "node_settings_json.jparam_settings",
                                jparam_settings
                              );
                              const strPath = pathToFieldValue.join(".");
                              const prevValue = getValues(strPath);
                              if (typeof prevValue === "string") {
                                setValue(strPath, prevValue + replace_tag);
                              }
                            }}
                          >
                            <Plus height={15} />
                          </span>
                          <span>{key}:</span>
                          <span>{value}</span>
                        </SelectJparamDiv>
                      );
                    };
                    return (
                      <Details key={id}>
                        <StyledSummary>
                          {data.name} ${id}:{positionNumber}
                        </StyledSummary>
                        <FormSettings
                          RenderElement={RenderElement}
                          obj={data.node_settings_json}
                          path={[`node_settings_json`]}
                        />
                        <FormSettings
                          RenderElement={RenderElement}
                          obj={data.node_response_settings_json}
                          path={[`node_response_settings_json`]}
                        />
                      </Details>
                    );
                  }
                )}
              </ListSettingsDiv>
            )}
          </Details>
        </SelectorJparamOptionsDiv>
      )}
    </SelectorJparamDiv>
  );
};

const SettingItem = ({ path }: any) => {
  const { type } = useContext(NodeSettingsContext);

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
      <RightInputDiv>
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
        {type === "node" && <SelectorJparam pathToFieldValue={path} />}
      </RightInputDiv>
    </ItemSettingLabel>
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
            <FormSettings
              RenderElement={SettingItem}
              key={key}
              obj={values[key]}
              path={[key]}
            />
          ) : null;
        })}
        {Object.keys(errors).length !== 0 && (
          <div>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
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

export const Settings = ({ json }: { json: any }) => {
  const [leftBarKey, setLeftBarKey] = useState(0);
  const [rightBarKey, setRightBarKey] = useState(0);
  const [defaultValues, setDefaultValues] = useState(json);
  const [control, setControl] = useState();

  const setFormValues = (newData: block) => {
    setDefaultValues(newData);
    setLeftBarKey((key) => key + 1);
  };

  return (
    <FormSettingsContext.Provider value={{ setFormValues }}>
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
              setFormValues={setFormValues}
              control={control}
              defaultValue={defaultValues}
            />
          )}
        </NodeSettingsDiv>
      </NodeSettingsWrapper>
    </FormSettingsContext.Provider>
  );
};
