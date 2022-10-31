import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        account: "null",
        starmaskInstalled: true,
        starMaskConnected: false,
    },
    reducers: {
        setAccount: (state, { type, payload }) => {
            // state.account = payload[0];
            state.starMaskConnected = true;
        },
        setInitial: (state, { type, payload }) => {
            console.log("do action ", type, "payload", payload);
            state.starmaskInstalled = payload.isStarMaskInstalled;
            state.starMaskConnected = payload.isStarMaskConnected;
        }
    },
})

export const {
    setAccount,
    setInitial
} = globalSlice.actions

export default globalSlice.reducer