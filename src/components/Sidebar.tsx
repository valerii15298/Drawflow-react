import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleSidebar } from "../redux/store";
import { Arrows, SearchIcon } from "../svg";
import FilterList from "./FilterList";

const SidebarDiv = styled.div`
  min-width: 300px;
`;

const GroupsDiv = styled.div`
  border-bottom: 1px solid #e8e8ef;
  max-height: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  text-align: center;
  transition: all 0.5s ease;

  :hover {
    max-height: 500px;
    div {
      order: unset;
    }
  }
`;

const GroupDiv = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-family: Roboto;
  color: #808292;
  font-size: 14px;
  height: 48px;
  width: calc(88% / 3);
  text-align: center;
  position: relative;
  color: black;
  font-size: medium;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
  ${({ selected }) =>
    selected &&
    css`
      order: -1;
      :after {
        position: absolute;
        display: block;
        content: "";
        width: 100%;
        height: 4px;
        background-color: #217ce8;
        bottom: 0;
      }
    `};
`;

const GroupList = ({
  selectedGroup,
  setSelectedGroup,
}: {
  selectedGroup: number;
  setSelectedGroup: (arg: number) => void;
}) => {
  const [groupList, setGroupList] = useState<Array<string>>(["Loading"]);

  useEffect(() => {
    setGroupList([
      "Triggers",
      "Actions",
      "Loggers",
      "Feedbacks",
      "Pushes",
      "Notifications",
      "Hooks",
    ]);
  }, []);
  return (
    <GroupsDiv>
      {groupList.map((group, id) => {
        return (
          <GroupDiv
            key={id}
            selected={id === selectedGroup}
            onClick={() => setSelectedGroup(id)}
          >
            {group}
          </GroupDiv>
        );
      })}
    </GroupsDiv>
  );
};

const SearchInput = styled.input`
  display: block;
  width: 85%;
  height: 40px;
  background-color: #fff;
  border: 1px solid #e8e8ef;
  box-shadow: 0px 2px 8px rgb(34 34 87 / 5%);
  border-radius: 5px;
  text-indent: 35px;
  font-size: 16px;
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const SearchSpan = styled.span`
  margin-left: auto;
  margin-right: -25px;
  display: inline-block;
  z-index: 2;
  height: 18px;
  width: 18px;
  background-color: white;
  position: relative;
  ::before,
  ::after {
    content: "";
    background-color: white;
    width: 5px;
    height: 20px;
    position: absolute;
  }
  ::before {
    left: -5px;
  }
  ::after {
    right: -5px;
  }
`;

const SearchBar = ({
  setSearchWord,
}: {
  setSearchWord: (value: string) => void;
}) => {
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
      <ToggleSidebar />
    </SearchDiv>
  );
};

const ExpandDiv = styled.div<{ opened: boolean }>`
  :hover {
    cursor: pointer;
  }

  ${({ opened }) =>
    opened &&
    css`
      transform: rotate(180deg);
    `};
`;
export const ToggleSidebar = () => {
  const visible = useAppSelector((s) => s.sidebarVisible) ?? true;
  const dispatch = useAppDispatch();
  return (
    <ExpandDiv opened={!visible} onClick={() => dispatch(toggleSidebar())}>
      <Arrows height={40} />
    </ExpandDiv>
  );
};

export const Sidebar = () => {
  const [searchWord, setSearchWord] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<number>(0);
  const visible = useAppSelector((s) => s.sidebarVisible);

  if (visible === false) return null;

  return (
    <SidebarDiv>
      <SearchBar setSearchWord={setSearchWord} />
      <GroupList
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />
      <FilterList searchWord={searchWord} />
    </SidebarDiv>
  );
};
