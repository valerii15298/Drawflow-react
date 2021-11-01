import { useContext, useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { mapKeyToDisplayName } from "../../models/tools";
import { updateTemplateNode } from "../../redux/api";
import { actions } from "../../redux/drawflowSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ObjectKeys, step } from "../../types";
import { ToggleSidebar } from "../Sidebar";
import { FormSettings } from "./FormSettings";
import { NodeJumpControls } from "./NodeJumpControls";
import { SettingItem } from "./SettingItem";
import { formType, NodeSettingsContext } from "./Settings";
import {
  ControlsDiv,
  DefaultSettingsDetails,
  DeleteButton,
  DescriptionDiv,
  LeftBarForm,
  LeftBarHeader,
  ListSettingsDiv,
  ResetButton,
  SaveButton,
  StyledSummary,
  TitleDiv,
  TitleImg,
  TitleInfoDiv,
  ToggleSidebarDiv,
} from "./StyledComponents";

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
  const methods = useForm({
    defaultValues: JSON.parse(JSON.stringify(defaultValues)),
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
  const values = getValues();
  let { name, description, icon_link } = values;
  if (
    [name, description, icon_link].includes(undefined) &&
    "flow_node" in values
  ) {
    const { node_name, node_description, node_icon_link } = values.flow_node;
    name = node_name;
    description = node_description;
    icon_link = node_icon_link;
  }

  const sidebarVisible = useAppSelector((s) => s.sidebarVisible) ?? true;

  // console.log("render", { defaultValues, values });
  const onSubmit = (data: formType) => {
    data = getValues();
    type === "template" &&
      dispatch(updateTemplateNode(JSON.parse(JSON.stringify(data))));
    type === "node" &&
      dispatch(actions.updateNode(JSON.parse(JSON.stringify(data)) as step));
  };

  const onDelete = () => {
    type === "template" &&
      dispatch(
        updateTemplateNode({
          ...getValues(),
          delete: 1,
        })
      );
    // type === "node" &&
    //   dispatch(updateTemplateNode({ ...getValues(), delete: 1 }));
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
          <TitleImg src={icon_link} />

          <TitleInfoDiv>
            <TitleDiv>{name}</TitleDiv>
            <DescriptionDiv>{description}</DescriptionDiv>
          </TitleInfoDiv>
        </LeftBarHeader>
        {type === "node" && <NodeJumpControls id={id} />}
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
