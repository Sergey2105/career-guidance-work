import { PayloadAction, createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { error } from "console";

interface ApiError {
    non_field_errors: string;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    message: string;
    code?: number;
}

interface type {
    user: {} | null;
    isLogin: boolean;
    auth_token: string | null;
    loading: boolean;
    loadingAnother: boolean;
    errors: ApiError | null;
    userData: Record<string, any>;
    userDataFull: Record<string, any>;
    userDataFullAnother: Record<string, any>;
}

const initialState: type = {
    user: null,
    isLogin: false,
    auth_token: null,
    loading: true,
    loadingAnother: true,
    errors: null,
    userData: {},
    userDataFull: {},
    userDataFullAnother: {},
};

export const clearErrorsAction = createAction("CLEAR_ERRORS");

export const register = createAsyncThunk(
    "auth/register",
    async ({ username, password, email, first_name, last_name }: { username: string; password: string; email: string; first_name: string; last_name: string }, thunkAPI) => {
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
    const dataChange = await response.json();

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
        const result = await response.json();

        if (response.status === 200 || response.status === 201) {
            return result;
        } else {
            return thunkAPI.rejectWithValue(result);
        }
    }
});

export const getMeFull = createAsyncThunk("auth/getMeFull", async function (id: string) {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/users/${id}/`).then((res) => res.json());
});

// export const getMeFullDelete = createAsyncThunk("auth/getMe", async ({ id }: { id: string }, thunkAPI) => {
//     const token = localStorage.getItem("userToken");
//     if (token !== null) {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/users/${id}/`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Token ${token}`,
//             },
//         });
//         const result = await response.json();

//         if (response.status === 200 || response.status === 201) {
//             return result;
//         } else {
//             return thunkAPI.rejectWithValue(result);
//         }
//     }
// });

export const getAnotherFull = createAsyncThunk("auth/getMeFullAnother", async function (id: string) {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/users/${id}/`).then((res) => res.json());
});

export const data = createAsyncThunk(
    "auth/data",
    async function (
        {
            id,
            email,
            first_name,
            last_name,
            birthday,
            phone,
            telegram,
            tags,
            info,
            profile_pic,
        }: {
            id: string;
            email: string;
            first_name: string;
            last_name: string;
            birthday: string;
            phone: string;
            telegram: string;
            tags: any;
            info: string;
            profile_pic: string;
        },
        thunkAPI,
    ) {
        const token = localStorage.getItem("userToken");
        if (token !== null) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/users/${id}/update/`, {
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
                    phone,
                    telegram,
                    tags,
                    info,
                    profile_pic,
                }),
            });
            const result = await response.json();

            if (response.status === 200 || response.status === 201) {
                return result;
            } else {
                return thunkAPI.rejectWithValue(result);
            }
        }
    },
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // addToken: (state) => {
        //     state.auth_token = localStorage.getItem("userToken");
        // },
        // addUser: (state) => {
        //     state.user = localStorage.getItem("user");
        // },
        clearError: (state) => {
            state.errors = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(clearErrorsAction, (state) => {
            state.errors = null; // очищаем ошибки
        });
        builder.addCase(register.fulfilled, (state, action) => {});
        builder.addCase(register.pending, (state, action) => {});
        builder.addCase(register.rejected, (state, action) => {
            state.errors = action.payload as ApiError;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.errors = null;
        });
        builder.addCase(login.pending, (state, action) => {
            state.errors = null;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.errors = action.payload as ApiError;
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
            // state.loading = false;
            state.loadingAnother = false;
        });
        builder.addCase(getAnotherFull.pending, (state, action) => {
            // state.loading = true;
            state.loadingAnother = true;
        });
        builder.addCase(getAnotherFull.rejected, (state, action) => {
            // state.loading = true;
            state.loadingAnother = true;
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            state.userDataFull = {};
            state.userData = {};
        });
        builder.addCase(data.fulfilled, (state, action) => {
            state.errors = null;
        });
        builder.addCase(data.pending, (state, action) => {
            state.errors = null;
        });
        builder.addCase(data.rejected, (state, action) => {
            state.errors = action.payload as ApiError;
        });
    },
});
export const { clearError } = authSlice.actions;

export const selectUser = (state: RootState) => state.authSlice.userData;
export const selectUserFull = (state: RootState) => state.authSlice.userDataFull;
export const selectUserFullAnother = (state: RootState) => state.authSlice.userDataFullAnother;

export const selectErrorsRegister = (state: RootState) => state.authSlice.errors;
export const selectErrorsLogin = (state: RootState) => state.authSlice.errors;
export const selectErrorsData = (state: RootState) => state.eventSlice.errors;

// export const selectLoadingUser = (state: RootState) => state.authSlice.loading;
export const selectLoadingUser = (state: RootState) => state.authSlice.loading;
export const selectLoadingUserFullAnother = (state: RootState) => state.authSlice.loadingAnother;

export default authSlice.reducer;
