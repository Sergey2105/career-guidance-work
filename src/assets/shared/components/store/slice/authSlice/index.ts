import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

interface type {
    user: {} | null;
    isLogin: boolean;
    auth_token: string | null;
    loading: boolean;
    errors: { [key: string]: string[] };
    // error?: Record<string, any> | unknown;
    userData: Record<string, any>;
    userDataFull: Record<string, any>;
    userDataFullAnother: Record<string, any>;
}

const initialState: type = {
    user: null,
    isLogin: false,
    auth_token: null,
    loading: true,
    errors: {},
    userData: {},
    userDataFull: {},
    userDataFullAnother: {},
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
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        localStorage.removeItem("userToken");
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/logout/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        });
    }
});

export const getMe = createAsyncThunk("auth/getMe", async (_, thunkAPI) => {
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

export const getMeFull = createAsyncThunk("auth/getMeFull", async function (id: string) {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/users/${id}/`).then((res) => res.json());
});

export const getAnotherFull = createAsyncThunk("auth/getMeFullAnother", async function (id: string) {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/users/${id}/`).then((res) => res.json());
});

export const data = createAsyncThunk(
    "auth/data",
    async function ({
        id,
        email,
        first_name,
        last_name,
        birthday,
        telegram,
        info,
    }: {
        id: string;
        email: string;
        first_name: string;
        last_name: string;
        birthday: string;
        telegram: string;
        info: string;
    }) {
        const token = localStorage.getItem("userToken");
        if (token !== null) {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/users/${id}/`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
                body: JSON.stringify({
                    email,
                    first_name,
                    last_name,
                    birthday,
                    telegram,
                    info,
                }),
            });
        }
    },
);

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
        builder.addCase(login.fulfilled, (state, action) => {});
        builder.addCase(login.pending, (state, action) => {});
        builder.addCase(login.rejected, (state, action) => {
            state.errors = action.payload;
            // console.log( action.payload);
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.userData = action.payload;
            // state.loading = false;
        });
        builder.addCase(getMe.pending, (state) => {
            // state.loading = true;
        });
        builder.addCase(getMe.rejected, (state, action) => {
            // state.loading = true;
        });
        builder.addCase(getMeFull.fulfilled, (state, action) => {
            state.userDataFull = action.payload;
            state.loading = false;
        });
        builder.addCase(getMeFull.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getMeFull.rejected, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAnotherFull.fulfilled, (state, action) => {
            state.userDataFullAnother = action.payload;
        });
        builder.addCase(getAnotherFull.pending, (state, action) => {});
        builder.addCase(getAnotherFull.rejected, (state, action) => {});
        builder.addCase(logout.fulfilled, (state, action) => {
            state.userDataFull = {};
            state.userData = {};
        });
    },
});
export const { addToken } = authSlice.actions;

export const selectErrors = (state: RootState) => state.authSlice.errors;
export const selectUser = (state: RootState) => state.authSlice.userData;
export const selectUserFull = (state: RootState) => state.authSlice.userDataFull;
export const selectUserFullAnother = (state: RootState) => state.authSlice.userDataFullAnother;
export const selectEventsUser = (state: RootState) => state.eventsSlice.loading;

export default authSlice.reducer;
