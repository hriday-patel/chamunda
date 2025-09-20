import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    drop: false,
    profile: false
}

const dropSlice = createSlice({
    name: 'Drop',
    initialState: initialState,
    reducers: {
        toggle : (state) => {
            state.drop = !state.drop;
        },
        pro: (state) => {
            state.profile = !state.profile;
        }
    }
})

export const {toggle, pro} = dropSlice.actions;

export default dropSlice.reducer;