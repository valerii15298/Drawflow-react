import { MouseEvent } from "react";
import { actions, selectActiveDrawflow } from '../../redux/drawflowSlice'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

type Props = {
    svgKey?: string,
    d: string,
}

const Path = (props: Props) => {
    const { svgKey, d } = props;
    const state = useAppSelector(selectActiveDrawflow)
    const { selectId } = state;
    const dispatch = useAppDispatch()


    const className = "main-path " + ((selectId === svgKey && svgKey) ? 'select' : '')

    return <path
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        d={d}
        onMouseDown={(e) => {
            e.stopPropagation()
            // if (editLock) return;
            dispatch(actions.select({ type: 'path', selectId: svgKey }))
        }}
    ></path>

}

export default Path;
