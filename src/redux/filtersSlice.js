import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filter',
    initialState: {
        name: ""
    },
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        }
    }

})

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.name;