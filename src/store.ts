import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './reducer';

export const store = configureStore({
    reducer: {
        filterReducer: counterSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch