import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { count } from "console";

// interface typeEvents {
//     data: Record<string, any>;
//     loading: boolean;
//     error: string;
// }

const initialState = {
    data: {
        links: {
            next: "",
            pervions: "",
        },
        meta: {
            current_page: 0,
            page_count: 0,
            pre_page: 0,
            total_count: 0,
        },
        results: [],
    },
    count: "",
    loading: true,
    error: "",
};

export const fetchEvents = createAsyncThunk("events/fetchEvent", async function ({ page, search }: { page?: number; search?: string | number }) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/meeting/${page !== 1 ? `?page=${page}&per_page=10&search=${search}` : `?page=${1}&per_page=10&search=${search}`}`,
        // `${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/meeting/${page !== 1 ? `?page=${page}&per_page=10&search=${search}` : `?page=${1}&per_page=10&search=${search}`}/`,
    ).then((res) => res.json());
    return response;
});

const eventsSlice = createSlice({
    name: "event",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEvents.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchEvents.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchEvents.rejected, (state, action) => {
            state.loading = true;
        });
    },
});

export const {} = eventsSlice.actions;

export const selectEvents = (state: RootState) => state.eventsSlice.data;
export const selectEventsLoading = (state: RootState) => state.eventsSlice.loading;

export default eventsSlice.reducer;
