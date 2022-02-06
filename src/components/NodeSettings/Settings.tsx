import { createContext, useState } from "react";
import { getTemplateNode } from "../../models/getTemplateNode";
import { LeftBar } from "./LeftBar";
import { RightBar } from "./RightBar";
import { NodeSettingsDiv, NodeSettingsWrapper } from "./StyledComponents";
import { formType } from "./TemplateNodeSettings";

export const templateNode = getTemplateNode();

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

export const Settings = ({ json, id }: { json: formType; id: number }) => {
  const [leftBarKey, setLeftBarKey] = useState(0);
  const [rightBarKey, setRightBarKey] = useState(0);
  const [defaultValues, setDefaultValues] = useState(json);
  const [control, setControl] = useState();
  const [rightBarNeedsToRemount, setRightBarNeedsToRemount] = useState(false);

  const setFormValues = (newData: formType) => {
    setDefaultValues(newData);
    setLeftBarKey((key) => key + 1);
    setRightBarNeedsToRemount(true);
  };

  return (
    <FormSettingsContext.Provider value={{ setFormValues }}>
      <NodeSettingsWrapper>
        <NodeSettingsDiv>
          <LeftBar
            key={`leftBar-${leftBarKey}`}
            defaultValues={defaultValues}
            setControl={setControl}
            id={id}
            remountRightBar={() => {
              setRightBarNeedsToRemount(false);
              setRightBarKey((key) => key + 1);
            }}
            rightBarNeedsToRemount={rightBarNeedsToRemount}
          />
          {control && (
            <RightBar
              key={`rightBar-${rightBarKey}`}
              remount={() => {
                // setRightBarKey((key) => key + 1);
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
