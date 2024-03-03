import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

interface type {
    fullUserData: Record<string, any>;
}

const initialState: type = {
    fullUserData: {},
};

export const userDate = createAsyncThunk("user/userDate", async (_, thunkAPI) => {
    // const token = localStorage.getItem("userToken");
    // if (token !== null) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/users/10/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // Authorization: `Token ${token}`,
        },
    });
    // }
    return response;
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userDate.fulfilled, (state, action) => {
            state.fullUserData = action.payload;
        });
        builder.addCase(userDate.pending, (state) => {});
        builder.addCase(userDate.rejected, (state, action) => {});
    },
});

export const selectFullUser = (state: RootState) => state.userSlice.fullUserData;

export default userSlice.reducer;
