import { useAppSelector, useAppDispatch } from './redux/hooks'

import { decrement, increment, incrementByAmount, selectCount, fetchPosts } from './redux/counterSlice'
import { useEffect } from 'react'

export default function Counter() {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(15))}>Increment by 15</button>
        <div>{count}</div>
    </div>
}