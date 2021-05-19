import { configureStore } from '@reduxjs/toolkit'
import { drawflowSlice } from './drawflowSlice'

export const store = configureStore({
  reducer: {
    drawflowSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// store.subscribe(() => console.log(store.getState()))