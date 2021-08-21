import styled from "styled-components";
import { Stop } from "./svg-components";

const StopDiv = styled.div`
  background: 0;
  display: grid;
  place-items: center;
  height: 2em;
  margin-right: 0.5em;

  svg {
    height: 90%;
    cursor: pointer;
  }
`;
export const StopButton = (props: Record<string, unknown>) => {
  return (
    <StopDiv>
      <Stop {...props} />
    </StopDiv>
  );
};
