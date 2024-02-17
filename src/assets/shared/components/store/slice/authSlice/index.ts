import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { stat } from "fs";

interface type {
    user: string | null;
    isLogin: boolean;
    auth_token: string | null;
    loading: boolean;
    error: string;
    userData: Record<string, any>;
}

const initialState: type = {
    user: "",
    isLogin: false,
    auth_token: null,
    loading: false,
    error: "",
    userData: {},
};

// export const signup = createAsyncThunk("auth/register", async ({ username, password, email }: { username: string; password: string; email: string }, thunkAPI) => {
//     // const data = {
//     //     username: "",
//     //     email: "",
//     //     password: "",
//     // };
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/auth/users`, {
//         method: "POST",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, email, password }),
//     });
//     let dataChange = await response.json();

//     if (response.status === 200) {
//         localStorage.setItem("token", dataChange.auth_token);
//         return dataChange;
//     } else {
//         return thunkAPI.rejectWithValue(dataChange);
//     }
// });

// export const login = createAsyncThunk("auth/login", async (data: string) => {
//     return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/login`, {
//         mode: "no-cors",
//         method: "POST",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//         },
//         body: data,
//     }).then((res) => res);
// });

export const login = createAsyncThunk("auth/login", async ({ username, password }: { username: string; password: string }, thunkAPI) => {
    // const data = {
    //     username: "",
    //     password: "",
    // };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });
    let dataChange = await response.json();
    console.log("response", dataChange);

    if (response.status === 200) {
        localStorage.setItem("userToken", dataChange.auth_token);
        return dataChange;
    } else {
        return thunkAPI.rejectWithValue(dataChange);
    }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    const token = localStorage.removeItem("userToken");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/logout/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
    });
    let userInfo = await response.json();
    return userInfo;
});

export const getMe = createAsyncThunk("auth/me", async (_, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/uset_by_token/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
    });
    let userInfo = await response.json();
    return userInfo;
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
        // builder.addCase(signup.fulfilled, (state, action) => {
        //     // state.userData = action.payload;
        //     console.log(action);
        // });
        // builder.addCase(signup.rejected, (state, action) => {
        //     console.log(action);
        // });
        // builder.addCase(signup.pending, (state, action) => {
        //     // console.log(action);
        // });

        builder.addCase(login.fulfilled, (state, action) => {
            state.isLogin = true;
        });
        builder.addCase(login.rejected, (state, action) => {
            console.log(action);
            state.isLogin = false;
        });
        builder.addCase(login.pending, (state, action) => {
            // console.log(action);
            state.isLogin = false;
        });

        builder.addCase(getMe.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.loading = false;
            state.error = "";
        });
        builder.addCase(getMe.pending, (state) => {
            state.loading = true;
            state.error = "";
        });

        builder.addCase(getMe.rejected, (state, action) => {
            state.loading = false;
            state.error = "";
            // state.error = action.error.message;
        });
    },
});
export const { addToken } = authSlice.actions;

// export const selectEvent = (state: RootState) => state.auth.user;
export const selectUser = (state: RootState) => state.auth.userData;

export default authSlice.reducer;
