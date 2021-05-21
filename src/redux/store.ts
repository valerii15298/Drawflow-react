import { combineReducers, configureStore, createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import { block, drawflows, Slices } from '../types'
import { drawflowSlice } from './drawflowSlice'
import mock from '../Mock'
const changeVersion = createAction<number>('versions/changed')

const st = drawflowSlice(undefined, { type: 'init' });

const initialState = {
  version: 0,
  flows: [st, st],
  templates: [] as block[]
}

export const fetchNodeTemplates = createAsyncThunk('fetchPosts', async () => {
  return await mock.getFilters(5)
})

export const fetchFlowVersion = createAsyncThunk('fetchFlowVersion', async () => {
  return await mock.getDummy()
})


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeVersion, (state, { payload }) => {
      state.version = payload
    })
    .addCase(fetchNodeTemplates.fulfilled, (state, action) => {
      state.templates = action.payload
    })
    .addCase(fetchFlowVersion.fulfilled, (state, action) => {
      const { nodes: drawflow, connections } = action.payload;
      state.flows[state.version] = drawflowSlice(
        state.flows[state.version],
        {
          type: Slices.Drawflow + '/load',
          payload: { drawflow, connections }
        })
    })
    // reducer foe drawflow
    .addMatcher(
      (action) => action.type.startsWith(Slices.Drawflow),
      (state, action) => {
        state.flows[state.version] = drawflowSlice(state.flows[state.version], action)
      }
    )


})

export const store = configureStore({
  reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// store.subscribe(() => console.log(store.getState()))