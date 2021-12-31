import { useContext, useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTemplateNodesUpdateMutation } from "../../generated/apollo";
import { mapKeyToDisplayName } from "../../models/tools";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ToggleSidebar } from "../Sidebar";
import { FormSettings } from "./FormSettings";
import { NodeJumpControls } from "./NodeJumpControls";
import { SettingItem } from "./SettingItem";
import { NodeSettingsContext } from "./Settings";
import { formType } from "./TemplateNodeSettings";

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
  const [updateNode] = useTemplateNodesUpdateMutation({
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
    // const { id, ...data } = getValues();
    // const set = filterTypename(data);
    // set.props = { [`node${data.info.type}PropsRef`]: data.props };
    // console.log(set);
    // TODO
    // updateNode({
    //   variables: { input: { filter: { id: [id] }, set } },
    // }).then(console.log);
    // type === "template" &&
    //   dispatch(updateTemplateNode(JSON.parse(JSON.stringify(data))));
    // type === "node" &&
    //   dispatch(actions.updateNode(JSON.parse(JSON.stringify(data)) as step));
  };

  const onDelete = () => {
    // type === "template" &&
    //   dispatch(
    //     updateTemplateNode({
    //       ...getValues(),
    //       delete: 1,
    //     })
    //   );
    //
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
          <TitleImg src={iconLink} />

          <TitleInfoDiv>
            <TitleDiv>{name}</TitleDiv>
            <DescriptionDiv>{description}</DescriptionDiv>
          </TitleInfoDiv>
        </LeftBarHeader>
        {type === "node" && <NodeJumpControls id={id} />}
        {/*<DefaultSettingsDetails>*/}
        {/*  <StyledSummary>Default settings</StyledSummary>*/}
        <ListSettingsDiv>
          {Object.entries(values).map(([key, value]) => {
            if (
              (typeof value !== "object" || value === null) &&
              !(key in mapKeyToDisplayName)
            ) {
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
        {/*</DefaultSettingsDetails>*/}
        {/*{ObjectKeys(mapKeyToDisplayName).map((key) => {*/}
        {/*  return values[key] ? (*/}
        {/*    <FormSettings*/}
        {/*      RenderElement={SettingItem}*/}
        {/*      key={key}*/}
        {/*      obj={values[key]}*/}
        {/*      path={[key]}*/}
        {/*    />*/}
        {/*  ) : null;*/}
        {/*})}*/}
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
