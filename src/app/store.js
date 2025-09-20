import { configureStore } from "@reduxjs/toolkit";
import dropReducer from '../features/dropDown/dropSlice.js'

export const store = configureStore({
    reducer: {
        Drop: dropReducer
    }
})