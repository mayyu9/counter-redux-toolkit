import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from './slices/CounterSlice';

export const store = configureStore({
    reducer: {counterSliceReducer}
});
