import { TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import {
  useTemplateNodesGroupsDeleteMutation,
  useTemplateNodesGroupsMutation,
  useTemplateNodesGroupsQuery,
  useTemplateNodesGroupsUpdateMutation,
} from "../generated/apollo";
import { setStateAction } from "../redux/actions";
import { useAppDispatch } from "../redux/hooks";
import { Close } from "../svg";
import { sideWindow } from "../types";
import { CloseButton } from "./FlowInfoSettings";
import { Button } from "./StyledComponents";

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
  // const originalGroups = useAppSelector((s) => s.groups);
  const { loading, error, data } = useTemplateNodesGroupsQuery();
  const refetchQueries = ["templateNodesGroups"];
  const [addGroups] = useTemplateNodesGroupsMutation({
    refetchQueries,
  });
  const [updateGroups] = useTemplateNodesGroupsUpdateMutation({
    refetchQueries,
  });
  const [deleteGroups] = useTemplateNodesGroupsDeleteMutation({
    refetchQueries,
  });
  const dispatch = useAppDispatch();
  const [groups, setGroups] = useState(data.queryTemplateNodesGroup);
  // console.log(groups);
  const setGroup = (
    id: string,
    info: { name?: string; description?: string }
  ) => {
    const group = groups.find((g) => g.id === id);
    setGroups([
      ...groups.filter((g) => g !== group),
      { id, ...group, ...info },
    ]);
  };
  if (loading) return <>Loading...</>;
  if (error) return <>Error</>;

  return (
    <GroupsDiv>
      <CloseButton
        onClick={() =>
          dispatch(
            setStateAction({
              windowConfig: { sideId: sideWindow.none },
            })
          )
        }
      >
        <Close width={19} height={19} />
      </CloseButton>
      <GroupsSettingsH1>Node groups</GroupsSettingsH1>
      {groups.map(({ id, name, description }) => {
        return (
          <GroupDiv key={id}>
            <DivGroup1>
              <GroupIdSpan>{id}</GroupIdSpan>
              <ButtonDeleteGroup
                onClick={() => {
                  const approval = window.confirm(
                    `Do you really wanna delete group ${name}, ID.${id}`
                  );
                  if (!approval) return;

                  setGroups((groups) =>
                    groups.filter((group) => group.id !== id)
                  );
                  deleteGroups({
                    variables: {
                      filter: {
                        id: [id],
                      },
                    },
                  });

                  // dispatch(
                  //   updateGroup({
                  //     id,
                  //     delete: 1,
                  //   })
                  // );
                }}
              >
                Delete
              </ButtonDeleteGroup>
              <ButtonSaveGroup
                onClick={() => {
                  const approval = window.confirm(
                    `Do you really wanna save group ${name}, ID.${id}`
                  );
                  if (!approval) return;

                  updateGroups({
                    variables: {
                      input: {
                        filter: { id: [id] },
                        set: {
                          name,
                          description,
                        },
                      },
                    },
                  });
                  setGroups((groups) =>
                    groups.map((group) => {
                      return group.id === id
                        ? {
                            ...group,
                            name,
                            description,
                          }
                        : group;
                    })
                  );

                  // dispatch(updateGroup(groups[id]));
                  // save group
                }}
              >
                Save
              </ButtonSaveGroup>
            </DivGroup1>
            <TextField
              value={name}
              type="text"
              onChange={(e) => {
                setGroup(id, { name: e.target.value });
              }}
              label="Name"
              size={"small"}
              sx={{ width: "100%", mt: 0.5 }}
              variant="outlined"
            />
            {/*<GroupTitleInput*/}
            {/*  value={name}*/}
            {/*  type="text"*/}
            {/*  onChange={(e) => {*/}
            {/*    setGroup(id, { name: e.target.value });*/}
            {/*  }}*/}
            {/*/>*/}
            <TextField
              sx={{
                mt: 1.5,
                width: "100%",
              }}
              label="Description"
              placeholder="Write description of nodes in this group:)"
              multiline
              value={description}
              onChange={(e) => {
                setGroup(id, { description: e.target.value });
              }}
            />
            {/*<GroupDescriptionTextarea*/}
            {/*  value={description}*/}
            {/*  onChange={(e) => {*/}
            {/*    setGroup(id, { description: e.target.value });*/}
            {/*  }}*/}
            {/*/>*/}
          </GroupDiv>
        );
      })}
      <ControlButtonsDiv>
        <AddNewGroupButton
          onClick={() => {
            const input = {
              name: "New group",
              description: "Group description",
            };
            addGroups({
              variables: {
                input: {
                  ...input,
                  nodes: [],
                },
              },
            }).then(
              ({
                data: {
                  addTemplateNodesGroup: {
                    templateNodesGroup: {
                      0: { id },
                    },
                  },
                },
              }) => {
                // console.log({ id });
                setGroups((groups) => [
                  ...groups,
                  {
                    ...input,
                    id,
                  },
                ]);
              }
            );
            // dispatch(updateGroup(getGroupTemplate()));
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
