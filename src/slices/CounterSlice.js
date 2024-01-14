import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counterState : 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementSlice: (state) =>  {
            state.counterState += 1
        },
        decrementSlice: (state) => {
            state.counterState -= 1
        },
        incrementSliceBy: (state, action) => {
            state.counterState += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { incrementSlice, decrementSlice, incrementSliceBy } = counterSlice.actions

export default counterSlice.reducer
