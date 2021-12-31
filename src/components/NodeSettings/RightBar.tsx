import { useRef, useState } from "react";
import { useWatch } from "react-hook-form";
import { CodeEditor } from "../CodeEditor";
import { formType } from "./TemplateNodeSettings";

export const RightBar = ({
  setFormValues,
  control,
  remount,
  defaultValue,
}: {
  setFormValues: (p: formType) => void;
  control: any;
  remount: () => void;
  defaultValue: formType;
}) => {
  const values = useWatch({
    control,
    defaultValue,
  });
  const [edited, setEdited] = useState<boolean>(false);
  const ref = useRef(null);
  return (
    <div
      onMouseLeave={() => {
        // if (
        //   ref.current.contains(document.activeElement) ||
        //   ref.current === document.activeElement
        // ) {
        //   console.log("YESSS no remount");
        //   return;
        // }
        // console.log("remount");
        // edited && remount();
      }}
      ref={ref}
    >
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
