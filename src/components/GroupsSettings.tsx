import { TextField } from "@mui/material";
import { useState } from "react";
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
import {
  AddNewGroupButton,
  ButtonDeleteGroup,
  ButtonSaveGroup,
  CloseButton,
  ControlButtonsDiv,
  DivGroup1,
  GroupDiv,
  GroupIdSpan,
  GroupsDiv,
  GroupsSettingsH1,
} from "./StyledComponents";

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
  const [groups, setGroups] = useState(data.templateNodesGroups);
  // console.log(groups);
  const setGroup = (
    id: number,
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

                  deleteGroups({ variables: { where: { id } } }).then(() => {
                    setGroups((groups) =>
                      groups.filter((group) => group.id !== id)
                    );
                  });
                }}
              >
                Delete
              </ButtonDeleteGroup>
              <ButtonSaveGroup
                onClick={() => {
                  const approval = window.confirm(
                    `Do you really wanna update group ${name}, ID.${id}`
                  );
                  if (!approval) return;

                  updateGroups({
                    variables: {
                      where: { id },
                      data: {
                        name: { set: name },
                        description: { set: description },
                      },
                    },
                  }).then(() => {
                    alert(`Successfully updated group`);
                  });
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
              sx={{
                width: "100%",
                mt: 0.5,
              }}
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
            const data = {
              name: "New group",
              description: "Group description",
            };
            addGroups({ variables: { data } }).then(
              ({
                data: {
                  createTemplateNodesGroup: { id },
                },
              }) => {
                setGroups((groups) => [
                  ...groups,
                  {
                    ...data,
                    id,
                  },
                ]);
              }
            );
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
