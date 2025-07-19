import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {FiltersState} from "@/Types/filter";

const initialState: FiltersState = {
    size: null,
    color: null,
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSize(state, action: PayloadAction<string | null>) {
            state.size = action.payload
        },
        setColor(state, action: PayloadAction<string | null>) {
            state.color = action.payload
        },
    },
})

export const { setSize, setColor } = filtersSlice.actions
export default filtersSlice.reducer
