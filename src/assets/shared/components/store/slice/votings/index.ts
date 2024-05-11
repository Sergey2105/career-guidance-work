import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { String } from "lodash";

interface ApiError {
    non_field_errors: string;
    message: string;
    error: string;
    detail: any;
    title: string;
    code?: number;
}

interface typeEvents {
    loading: boolean;
    voting: Array<any>;

    errors: ApiError | null;
}

const initialState: typeEvents = {
    voting: [],
    loading: true,
    errors: null,
};

export const createVoting = createAsyncThunk("voting/createVoting", async ({ id, name }: { id: string; name: string }, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/meeting/${id}/voting/create/`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({ name }),
        });
        const result = await response.json();

        if (response.status === 200 || response.status === 201) {
        } else {
            return thunkAPI.rejectWithValue(result);
        }
        return result;
    }
});

export const deleteVoting = createAsyncThunk("voting/deleteVoting", async ({ id }: { id: string }, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/meeting/voting/${id}/delete/`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        });
        const result = await response.json();

        if (response.status === 200 || response.status === 201 || response.status === 204) {
        } else {
            return thunkAPI.rejectWithValue(result);
        }
        return result;
    }
});

export const renameVoting = createAsyncThunk("voting/renameVoting", async ({ id, name }: { id: string; name: any }, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/voting/${id}/rename/`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({ name }),
        });
        const result = await response.json();

        if (response.status === 200 || response.status === 201) {
        } else {
            return thunkAPI.rejectWithValue(result);
        }
        return result;
    }
});

export const addField = createAsyncThunk("voting/addField", async ({ id, name }: { id: string; name: any }, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/voting/${id}/add_field/`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({ name }),
        });
        const result = await response.json();

        if (response.status === 200 || response.status === 201) {
        } else {
            return thunkAPI.rejectWithValue(result);
        }
        return result;
    }
});

export const destroyField = createAsyncThunk("voting/destroyField", async ({ id }: { id: string }, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/voting/destroy_field/${id}/`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        });
        const result = await response.json();

        if (response.status === 200 || response.status === 201) {
        } else {
            return thunkAPI.rejectWithValue(result);
        }
        return result;
    }
});

export const renameField = createAsyncThunk("voting/renameField", async ({ id, name }: { id: string; name: any }, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/field/${id}/rename/`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({ name }),
        });
        const result = await response.json();

        if (response.status === 200 || response.status === 201) {
        } else {
            return thunkAPI.rejectWithValue(result);
        }
        return result;
    }
});

export const addVote = createAsyncThunk("voting/addVote", async ({ id }: { id: string }, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/field/${id}/add_vote/`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            // body: JSON.stringify({ pk: id }),
        });
        const result = await response.json();

        if (response.status === 200 || response.status === 201) {
        } else {
            return thunkAPI.rejectWithValue(result);
        }
        return result;
    }
});

export const removeVote = createAsyncThunk("voting/removeVote", async ({ id }: { id: string }, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/field/${id}/remove_vote/`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            // body: JSON.stringify({ pk: id }),
        });
        const result = await response.json();

        if (response.status === 200 || response.status === 201) {
        } else {
            return thunkAPI.rejectWithValue(result);
        }
        return result;
    }
});

const votingSlice = createSlice({
    name: "voting",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createVoting.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(createVoting.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createVoting.rejected, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addField.fulfilled, (state, action) => {
            console.log(action);
        });
        builder.addCase(addField.pending, (state, action) => {
            console.log(action);
        });
        builder.addCase(addField.rejected, (state, action) => {
            console.log(action);
        });
        builder.addCase(renameField.fulfilled, (state, action) => {
            console.log(action);
        });
        builder.addCase(renameField.pending, (state, action) => {
            console.log(action);
        });
        builder.addCase(renameField.rejected, (state, action) => {
            console.log(action);
        });
    },
});

export default votingSlice.reducer;
