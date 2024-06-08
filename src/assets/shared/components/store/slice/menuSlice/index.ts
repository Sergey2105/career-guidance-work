import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

const initialState = {
    value: false,
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        openMenu: (state) => {
            state.value = true;
            document.body.style.overflow = "hidden";
        },
        closeMenu: (state) => {
            state.value = false;
            document.body.style.overflow = "visible";
        },
    },
});
export const { openMenu, closeMenu } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menuSlice.value;

export default menuSlice.reducer;
