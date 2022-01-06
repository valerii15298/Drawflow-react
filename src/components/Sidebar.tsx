import { useState } from "react";
import { useTemplateNodesGroupsQuery } from "../generated/apollo";
import { setStateAction, toggleSidebar } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Arrows, SearchIcon, SettingsIcon } from "../svg";
import { sideWindow } from "../types";
import {
  ExpandDiv,
  GroupItemDiv,
  GroupsListDiv,
  OpenGroupSettingButton,
  SearchDiv,
  SearchInput,
  SearchSpan,
  SidebarDiv,
} from "./StyledComponents";
import FilterList from "./TemplateNodesList";

const GroupList = ({
  selectedGroup,
  setSelectedGroup,
}: {
  selectedGroup: number;
  setSelectedGroup: (arg: number) => void;
}) => {
  // const dispatch = useAppDispatch();
  // const groups = useAppSelector((s) => s.groups);
  const { loading, error, data } = useTemplateNodesGroupsQuery();
  if (error) return <>Error!</>;
  if (loading) return <>Loading...</>;
  const groups = data.templateNodesGroups;

  return (
    <GroupsListDiv>
      <GroupItemDiv
        key={0}
        selected={-1 === selectedGroup}
        onClick={() => setSelectedGroup(-1)}
      >
        {"All"}
      </GroupItemDiv>
      {groups.map(({ id, name }) => {
        return (
          <GroupItemDiv
            key={id}
            selected={id === selectedGroup}
            onClick={() => setSelectedGroup(id)}
          >
            {name}
          </GroupItemDiv>
        );
      })}
    </GroupsListDiv>
  );
};

const SearchBar = ({
  setSearchWord,
}: {
  setSearchWord: (value: string) => void;
}) => {
  const dispatch = useAppDispatch();

  return (
    <SearchDiv>
      <SearchSpan>
        <SearchIcon />
      </SearchSpan>
      <SearchInput
        type="text"
        placeholder="Search templates"
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      />
      <OpenGroupSettingButton
        onClick={() =>
          dispatch(
            setStateAction({
              windowConfig: { sideId: sideWindow.groupSettings },
            })
          )
        }
      >
        <SettingsIcon height={30} />
      </OpenGroupSettingButton>
      <ToggleSidebar />
    </SearchDiv>
  );
};

export const ToggleSidebar = (props: any) => {
  const visible = useAppSelector((s) => s.sidebarVisible) ?? true;
  const dispatch = useAppDispatch();

  return (
    <ExpandDiv opened={!visible} onClick={() => dispatch(toggleSidebar())}>
      <Arrows height={40} {...props} />
    </ExpandDiv>
  );
};

export const Sidebar = () => {
  const [searchWord, setSearchWord] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<number>(-1);
  const visible = useAppSelector((s) => s.sidebarVisible);

  if (visible === false) return null;

  return (
    <SidebarDiv>
      <SearchBar setSearchWord={setSearchWord} />
      <GroupList
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />
      <FilterList selectedGroup={selectedGroup} searchWord={searchWord} />
    </SidebarDiv>
  );
};
