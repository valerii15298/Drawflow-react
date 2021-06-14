// import { useState } from "react";
// import { Grabme, More } from "../svg"

import styled from "styled-components";
import { actions } from "../redux/drawflowSlice";
import { useAppDispatch } from "../redux/hooks";

const StyledNode = styled.div`
  max-height: 100%;
  overflow: hidden;
`;

export const Round = (props: any) => {
  return (
    <StyledNode className="node-block">
      {JSON.stringify(props, null, 2)}
    </StyledNode>
  );

  // const { imgSrc, name, description } = props;
  // return (
  //     <div className="blockelem create-flowy">
  //         <div className="grabme">
  //             <Grabme />
  //         </div>
  //         <div className="blockin">
  //             <div className="blockico">
  //                 <span></span>
  //                 <img src={imgSrc} alt={name + '\n' + description} />
  //             </div>
  //             <div className="blocktext">
  //                 <p className="blocktitle">{name}</p>
  //                 <div className="side-elem-more">
  //                     <More />
  //                 </div>
  //                 <p className="blockdesc">{description}</p>
  //             </div>
  //         </div>
  //     </div>)
};
