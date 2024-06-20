import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

export interface CounterState {
    filter: string[]
}

const initialState: CounterState = {
    filter: []
}

export const counterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter: (state, action: PayloadAction<string[]>) => {
            state.filter = action.payload
        }
    }
})

export const { changeFilter } = counterSlice.actions

export const selectCount = (state: RootState) => state.filterReducer

export default counterSlice.reducer