import { MouseEvent } from "react";

const CircleComponent = (props: any) => {
    const { property, svgKey, i, editLock } = props;

    const onMouseDown = (e: MouseEvent) => {
        if (editLock) return;
        props.select(e, {
            svgKey,
            i,
        });
    }

    return (
        <circle
            {...property}
            xmlns="http://www.w3.org/2000/svg"
            className="point"
            r={6}
            onMouseDown={onMouseDown}
        />
    );
}

export default CircleComponent;
