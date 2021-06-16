import { MouseEvent } from "react";

export const CirclePortComponent = (props: any) => {
  const { property, svgKey, i, editLock } = props;

  const onMouseDown = (e: MouseEvent) => {
    if (editLock) return;
    props.select(e, {
      svgKey,
      i,
    });
  };

  return <circle {...property} r={6} onMouseDown={onMouseDown} />;
};
