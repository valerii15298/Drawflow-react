import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchNodeTemplates } from "../redux/store";
import { NodeTemplate } from "./NodeTemplate";

const ListDiv = styled.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(4, minmax(2.2em, 1fr));
  grid-auto-rows: minmax(1em, auto);
  grid-gap: 1em;
  background-color: #f5f5f5;
`;

const FilterList = (props: { searchWord: string }) => {
  const list = useAppSelector((s) => s.templates);
  const dispatch = useAppDispatch();
  const { searchWord } = props;
  const searchArr = searchWord
    .toLowerCase()
    .split(" ")
    .filter((item) => item.length > 0);

  useEffect(() => {
    dispatch(fetchNodeTemplates());
  }, [dispatch]);

  return (
    <ListDiv>
      {list.map((item, idx) => {
        const label = JSON.stringify(item, null, 2);

        return (
          (searchArr.find((word) => label.toLowerCase().includes(word)) ||
            !searchArr.length) && <NodeTemplate key={idx} id={idx} {...item} />
        );
      })}
    </ListDiv>
  );
};

export default FilterList;
