import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import Meeting from "@/pages/meeting";

interface typeEvents {
    loading: boolean;
    guests: Record<string, any>;
    meta: Record<string, any>;
    eventProps: Record<string, any>;
    places: any;
    errors: { [key: string]: string[] };
}

const initialState: typeEvents = {
    guests: [],
    meta: {
        total_count: 0,
        page_count: 0,
    },
    places: [],
    eventProps: {
        // id: 0,
        // author: "",
        // title: "",
        // body: "",
        // seats: 0,
        // timetable: {
        //     place: {
        //         office: "",
        //         max_participant: 0,
        //     },
        //     event_date: "",
        //     start_time: "",
        //     end_time: "",
        // },
        // created_at: "",
        // update_at: "",
        // tags: [],
        // chat: {},
        // voting: [],
    },
    loading: true,
    errors: {},
};

export const getEvent = createAsyncThunk("event/getEvent", async function (id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/meeting/${id}/`).then((res) => res.json());
    return response;
});

export const joinEvent = createAsyncThunk("event/joinEvent", async ({ id, meetings }: { id: string; meetings: string }, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/user/${id}/add_meeting/`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({ meetings }),
        });
    }
});

export const removeEvent = createAsyncThunk("event/removeEvent", async ({ id, meetings }: { id: string; meetings: string }, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/user/${id}/remove_meeting/`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({ meetings }),
        });
    }
});

export const getPlaces = createAsyncThunk("event/getPlaces", async function () {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/places_list/`).then((res) => res.json());
    // console.log(response);
    // return response;
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/places_list/`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        });
        const result = await response.json();
        return result;
    }
});

export const createTimetable = createAsyncThunk(
    "event/createTimetable",
    async ({ event_date, start_time, end_time, place }: { event_date: string; start_time: string; end_time: string; place: string }, thunkAPI) => {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/places_list/`).then((res) => res.json());
        // console.log(response);
        // return response;
        const token = localStorage.getItem("userToken");
        if (token !== null) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/timetable_create/`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
                body: JSON.stringify({ event_date, start_time, end_time, place }),
            });
            const result = await response.json();
            return result;
        }
    },
);

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
        builder.addCase(getPlaces.fulfilled, (state, action) => {
            state.places = action.payload;
        });
    },
});

export const {} = eventSlice.actions;

export const selectEventProps = (state: RootState) => state.eventSlice.eventProps;
export const selectPlace = (state: RootState) => state.eventSlice.places;

export default eventSlice.reducer;
