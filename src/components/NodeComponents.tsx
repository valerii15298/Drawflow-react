// import { useState } from "react";
// import { Grabme, More } from "../svg"

import styled from "styled-components";

const StyledNode = styled.div`
  max-height: 100%;
  overflow: hidden;
`;

export const Round = (props: Record<string, unknown>) => {
  return <StyledNode>{JSON.stringify(props, null, 2)}</StyledNode>;
};
