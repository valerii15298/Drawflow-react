import Switch from "@mui/material/Switch";
import { useContext } from "react";
import { Controller } from "react-hook-form";
import { mapNodeSettingsKeyToComponent } from "../../models/mapNodeSettingsKeyToComponent";
import { capitalize } from "../../models/tools";
import { getNestedObjectField } from "../../models/GetNestedObjectField";
import { SelectorJparam } from "./SelectorJparam";
import { NodeSettingsContext, templateNode } from "./Settings";
import { ItemSettingLabel, RightInputDiv } from "./StyledComponents";
import Checkbox from "@mui/material/Checkbox";

export const SettingItem = ({ path }: { path: string[] }) => {
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
      console.log({
        key,
        value,
        properValue: templateNode[key],
      });
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
            // const isNull = value === null;
            validate(value);

            //@ts-ignore
            const typeVal = key in templateNode ? templateNode[key] : value;

            if (typeof typeVal === "boolean") {
              return (
                <Checkbox
                  sx={{
                    p: 0,
                  }}
                  {...field}
                  checked={field.value}
                  size={"small"}
                />
              );
            }

            const type = typeof typeVal === "number" ? "number" : "text";

            const mappedComponent = getNestedObjectField(
              mapNodeSettingsKeyToComponent,
              path
            );
            // console.log(path, mappedComponent);
            if (mappedComponent) {
              // @ts-ignore
              return mappedComponent({ field });
            }

            return (
              <input
                type={type}
                {...field}
                value={value ?? ""}
                onChange={(e) => {
                  const { value } = e.target;
                  // console.log(value);
                  if (type === "number") {
                    field.onChange(parseInt(value));
                  } else {
                    field.onChange(value);
                  }
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
