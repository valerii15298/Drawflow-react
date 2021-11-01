import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useClickOutside } from "../../hooks/useClickOutside";
import { selectActiveDrawflow } from "../../redux/drawflowSlice";
import { Flow } from "../../redux/Flow";
import { useAppSelector } from "../../redux/hooks";
import Node from "../../redux/Node";
import { Plus, SettingsIcon } from "../../svg";
import { step } from "../../types";
import { FormSettings } from "./FormSettings";
import { getNestedObjectField } from "../../models/GetNestedObjectField";
import {
  Details,
  ListSettingsDiv,
  SelectJparamDiv,
  SelectorButton,
  SelectorJparamDiv,
  SelectorJparamOptionsDiv,
  StyledSummary,
} from "./StyledComponents";

export const SelectorJparam = ({
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
