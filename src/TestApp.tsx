import { useAppSelector, useAppDispatch } from './redux/hooks'

import { actions } from './redux/drawflowSlice'
import { useEffect } from 'react'

export default function Counter() {
    // The `state` arg is correctly typed as `RootState` already
    const state = useAppSelector(s => s)
    const dispatch = useAppDispatch()

    return <div>
        <button onClick={() => dispatch(actions.unSelect())}>Increment</button>
        {/* <button onClick={() => dispatch(decrement())}>Decrement</button> */}
        {/* <button onClick={() => dispatch(incrementByAmount(15))}>Increment by 15</button> */}
        {/* <div>{count}</div> */}
        <div><pre>{JSON.stringify(state, null, 2)}</pre></div>
    </div>
}
