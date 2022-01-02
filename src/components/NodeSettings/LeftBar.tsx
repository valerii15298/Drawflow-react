import { useContext, useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  NodeType,
  useTemplateNodesDeleteMutation,
  useTemplateNodesUpdateMutation,
} from "../../generated/apollo";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { filterTypename } from "../../tools/helpers";
import { ObjectKeys } from "../../types";
import { ToggleSidebar } from "../Sidebar";
import { FormSettings } from "./FormSettings";
import { NodeJumpControls } from "./NodeJumpControls";
import { SettingItem } from "./SettingItem";
import { NodeSettingsContext } from "./Settings";

import {
  ControlsDiv,
  DeleteButton,
  DescriptionDiv,
  LeftBarForm,
  LeftBarHeader,
  ListSettingsDiv,
  ResetButton,
  SaveButton,
  TitleDiv,
  TitleImg,
  TitleInfoDiv,
  ToggleSidebarDiv,
} from "./StyledComponents";
import { formType } from "./TemplateNodeSettings";

export const LeftBar = (props: {
  defaultValues: formType;
  setControl: (p: any) => void;
  id: number;
  rightBarNeedsToRemount: boolean;
  remountRightBar: () => void;
}) => {
  const {
    defaultValues,
    setControl,
    id,
    rightBarNeedsToRemount,
    remountRightBar,
  } = props;

  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener(
        "focus",
        () => {
          if (rightBarNeedsToRemount) {
            remountRightBar();
          }
        },
        true
      );
    }
    //@ignore
  }, []);
  const { type } = useContext(NodeSettingsContext);
  const dispatch = useAppDispatch();
  const [deleteTemplateNode] = useTemplateNodesDeleteMutation({
    refetchQueries: ["templateNodes"],
  });
  const [updateTemplateNode] = useTemplateNodesUpdateMutation({
    refetchQueries: ["templateNodes"],
  });
  const methods = useForm({
    defaultValues: JSON.parse(JSON.stringify(defaultValues)) as formType,
  });
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    getValues,
  } = methods;

  useEffect(() => {
    setControl(control);
  }, [control, setControl]);

  // const values = defaultValues;
  const values = getValues() as formType;
  const {
    info: { name, description, iconLink },
  } = values;

  const sidebarVisible = useAppSelector((s) => s.sidebarVisible) ?? true;

  // ChatNodeType
  // console.log("render", { defaultValues, values });
  const onSubmit = () => {
    const traverseRecursive = (obj: Record<string, any>, key: string) => {
      if (typeof obj[key] !== "object") {
        obj[key] = { set: obj[key] };
      } else {
        for (const key2 in obj[key]) {
          traverseRecursive(obj[key], key2);
        }
      }
    };
    const { id, ...info } = filterTypename(
      JSON.parse(JSON.stringify(getValues()))
    ) as formType;

    const {
      NodeProps: { type },
    } = info;
    const p1 = ObjectKeys(NodeType);
    type p2 = typeof p1[number];
    type keyType = `Node${p2}Props`;
    const NodePropsKey = `Node${type}Props` as keyType;
    const NodePropsValue = info.NodeProps[NodePropsKey];
    const dataToInsert = JSON.parse(JSON.stringify(info));
    for (const key in dataToInsert) {
      traverseRecursive(dataToInsert, key);
    }

    // const {} = info
    // set.props = { [`node${data.info.type}PropsRef`]: data.props };

    const data = {
      order: dataToInsert.order,
      info: { update: dataToInsert.info },
      group: { connect: { id: info.group.id } },
      NodeProps: {
        update: {
          [NodePropsKey]: { update: dataToInsert.NodeProps[NodePropsKey] },
        },
      },
    };
    console.log({ data });
    updateTemplateNode({
      variables: {
        where: { id },
        data,
      },
    }).then(console.log);

    // type === "template" &&
    //   dispatch(updateTemplateNode(JSON.parse(JSON.stringify(data))));
    // type === "node" &&
    //   dispatch(actions.updateNode(JSON.parse(JSON.stringify(data)) as step));
  };

  const onDelete = () => {
    deleteTemplateNode({ variables: { where: { id } } }).then(console.log);
  };

  // console.log(defaultValues);

  return (
    <FormProvider {...methods}>
      <LeftBarForm ref={ref} onSubmit={handleSubmit(onSubmit)}>
        <LeftBarHeader shift={!sidebarVisible}>
          {!sidebarVisible && (
            <ToggleSidebarDiv>
              <ToggleSidebar />
            </ToggleSidebarDiv>
          )}
          <TitleImg src={iconLink} />

          <TitleInfoDiv>
            <TitleDiv>{name}</TitleDiv>
            <DescriptionDiv>{description}</DescriptionDiv>
          </TitleInfoDiv>
        </LeftBarHeader>
        {type === "node" && <NodeJumpControls id={id} />}
        <ListSettingsDiv>
          {Object.entries(values).map(([key, value]) => {
            if (typeof value !== "object" || value === null) {
              return <SettingItem key={key} path={[key]} />;
            }
            return (
              <FormSettings
                RenderElement={SettingItem}
                key={key}
                obj={values[key]}
                path={[key]}
              />
            );
          })}
        </ListSettingsDiv>
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
