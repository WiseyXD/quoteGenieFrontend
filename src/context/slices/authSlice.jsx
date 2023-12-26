import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        email: null,
    },
    reducers: {
        setAuth: (state, action) => {
            state.token = action.payload.token;
            state.email = action.payload.email;
        },
        deleteAuth: (state) => {
            state.token = null;
            state.email = null;
        },
    },
});

export const { setAuth, deleteAuth } = authSlice.actions;
export default authSlice.reducer;

export const selectToken = (state) => state.auth.user;
