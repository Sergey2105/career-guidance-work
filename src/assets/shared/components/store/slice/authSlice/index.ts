import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { stat } from "fs";

interface type {
    user: {} | null;
    isLogin: boolean;
    auth_token: string | null;
    loading: boolean;
    error: Record<string, any>;
    userData: Record<string, any>;
}

const initialState: type = {
    user: null,
    isLogin: false,
    auth_token: null,
    loading: false,
    error: {},
    userData: {},
};

export const register = createAsyncThunk(
    "auth/register",
    async ({ username, password, email, first_name, last_name }: { username: string; password: string; email: string; first_name: string; last_name: string }, thunkAPI) => {
        // const data = {
        //     username: "",
        //     email: "",
        //     password: "",
        // };
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/user_register/`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, first_name, last_name, email }),
        });
        let dataChange = await response.json();

        if (response.status === 201) {
            return dataChange;
        } else {
            return thunkAPI.rejectWithValue(dataChange);
        }
    },
);

export const activated = createAsyncThunk("auth/activated", async (_, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    console.log(token);
    if (token !== null) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/user_create/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        });
    }
});

export const login = createAsyncThunk("auth/login", async ({ username, password }: { username: string; password: string }, thunkAPI) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/login/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });
    let dataChange = await response.json();

    if (response.status === 200) {
        localStorage.setItem("userToken", dataChange.auth_token);
    } else {
        return thunkAPI.rejectWithValue(dataChange);
    }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/logout/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    let userInfo = await response.json();

    if (response.status === 200) {
        localStorage.removeItem("userToken");
    } else {
        return thunkAPI.rejectWithValue(userInfo);
    }
});

export const getMe = createAsyncThunk("auth/me", async (_, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/user_by_token/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        });
        let userInfo = await response.json();

        return userInfo;
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addToken: (state) => {
            state.auth_token = localStorage.getItem("userToken");
        },
        addUser: (state) => {
            state.user = localStorage.getItem("user");
        },
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {});
        builder.addCase(register.rejected, (state, { payload }) => {});
        builder.addCase(register.pending, (state, action) => {});

        builder.addCase(login.fulfilled, (state, action) => {
            state.isLogin = true;
        });
        builder.addCase(login.rejected, (state, action) => {
            console.log(action);
            state.isLogin = false;
        });
        builder.addCase(login.pending, (state, action) => {
            state.isLogin = false;
        });

        builder.addCase(getMe.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.loading = false;
        });
        builder.addCase(getMe.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.loading = false;
        });
        builder.addCase(activated.fulfilled, (state, action) => {
            console.log(action);
            state.loading = false;
        });
        builder.addCase(activated.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(activated.rejected, (state, action) => {
            console.log(action);
            state.loading = false;
        });
    },
});
export const { addToken } = authSlice.actions;

export const selectErrors = (state: RootState) => state.authSlice.error;
export const selectUser = (state: RootState) => state.authSlice.userData;

export default authSlice.reducer;
