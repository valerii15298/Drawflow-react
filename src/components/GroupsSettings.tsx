import { useState } from "react";
import styled from "styled-components";
import { updateGroup } from "../redux/api";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { groups } from "../types";
import lodash from "lodash";
import { Button } from "./Button";
import { getGroupTemplate } from "../models/getGroupTemplate";

const ControlButtonsDiv = styled.div``;

const GroupsDiv = styled.div`
  padding: 0 10px 10px;
  position: relative;
  border: 1px solid #e8e8ef;
  flex: 0 0 300px;
  overflow-y: auto;
  max-height: 100%;
`;
const GroupDiv = styled.div`
  margin-bottom: 15px;
  padding: 5px;
  border-bottom: 2px solid lightgray;
`;
const GroupIdSpan = styled.span`
  color: blue;

  ::before {
    margin-left: 8px;
    content: " ID.";
  }
`;

const AddNewGroupButton = styled(Button)`
  text-align: center;
`;
const ButtonDeleteGroup = styled(Button)`
  margin-left: 5px;
`;
const ButtonSaveGroup = styled(Button)`
  margin-left: 5px;
`;

const DivGroup1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 8px;
`;

const GroupsSettingsH1 = styled.h2`
  text-align: center;
  border-bottom: 2px solid blue;
  color: #217ce8;
`;

const GroupTitleInput = styled.input`
  margin-right: 10px;
  font-weight: bolder;
  border: 1px solid #217ce8;
  font-size: 0.9em;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 5px;
  width: 90%;
`;
const GroupDescriptionTextarea = styled.textarea`
  border-radius: 5px;
  border: 1px solid #217ce8;

  /* flex: 1; */
  width: 90%;
  /* text-align: center; */
`;

export const GroupsSettings = () => {
  const originalGroups = useAppSelector((s) => s.groups);
  const dispatch = useAppDispatch();
  const [groups, setGroups] = useState(originalGroups);
  const setGroup = (id: number, info: Record<string, unknown>) => {
    const group = { ...groups[id], ...info };
    setGroups({ ...groups, [id]: group });
  };
  // console.log({ groups });
  if (Object.keys(originalGroups).length !== Object.keys(groups).length) {
    const newGroups: groups = {};
    for (const [id, group] of Object.entries(originalGroups)) {
      newGroups[Number(id)] = lodash.merge(group, groups[Number(id)] ?? {});
    }
    setGroups(newGroups);
  }

  return (
    <GroupsDiv>
      <GroupsSettingsH1>Node groups</GroupsSettingsH1>
      {Object.values(groups).map(
        ({ id, node_group_name, node_group_order, node_group_description }) => {
          return (
            <GroupDiv key={id}>
              <DivGroup1>
                <GroupIdSpan>{id}</GroupIdSpan>
                <ButtonDeleteGroup
                  onClick={() => {
                    const approval = window.confirm(
                      `Do you really wanna delete group ${node_group_name}, ID.${id}`
                    );
                    if (!approval) return;

                    dispatch(updateGroup({ id, delete: 1 }));
                  }}
                >
                  Delete
                </ButtonDeleteGroup>
                <ButtonSaveGroup
                  onClick={() => {
                    const approval = window.confirm(
                      `Do you really wanna save group ${node_group_name}, ID.${id}`
                    );
                    if (!approval) return;

                    dispatch(updateGroup(groups[id]));
                    // save group
                  }}
                >
                  Save
                </ButtonSaveGroup>
              </DivGroup1>
              <GroupTitleInput
                value={node_group_name}
                type="text"
                onChange={(e) => {
                  setGroup(id, { node_group_name: e.target.value });
                }}
              />
              <GroupDescriptionTextarea
                value={node_group_description}
                onChange={(e) => {
                  setGroup(id, { node_group_description: e.target.value });
                }}
              />
            </GroupDiv>
          );
        }
      )}
      <ControlButtonsDiv>
        <AddNewGroupButton
          onClick={() => {
            dispatch(updateGroup(getGroupTemplate()));
          }}
        >
          Add new
        </AddNewGroupButton>
      </ControlButtonsDiv>
    </GroupsDiv>
  );
};

/**
 * TODO
 * Adding new template node
 * Show templates related to groups
 */
