import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface CounterState {
  value: number,
  posts: any[],
  status?: string,
  error?: string,
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  posts: []
}

export const fetchPosts = createAsyncThunk('fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json())
  // console.log('response', response)
  return response.slice(0, 10)
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.posts = state.posts.concat(action.payload)
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer