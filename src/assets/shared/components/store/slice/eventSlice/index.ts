import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

// interface typeEvents {
//     data: Record<string, any>;
//     loading: boolean;
//     error: string;
// }

const initialState = {
    guests: [],
    meta: {
        total_count: 0,
        page_count: 0,
    },
    eventProps: {
        id: 0,
        author: "",
        title: "",
        body: "",
        seats: 0,
        timetable: {
            place: {
                office: "",
                max_participant: 0,
            },
            event_date: "",
            start_time: "",
            end_time: "",
        },
        created_at: "",
        update_at: "",
        tags: [],
        chat: {},
        voting: [],
    },
    count: "",
    loading: false,
    error: "",
};

export const getEvent = createAsyncThunk("event/getEvent", async function (id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/meeting/${id}/`).then((res) => res.json());
    return response;
});

export const joinEvent = createAsyncThunk("event/joinEvent", async (id: string) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/user/10/add_meeting/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({ id }),
        });
    }
});

const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEvent.fulfilled, (state, action) => {
            state.eventProps = {
                ...action.payload,
            };
        });
    },
});

export const {} = eventSlice.actions;

export const selectEventProps = (state: RootState) => state.eventSlice.eventProps;

export default eventSlice.reducer;
