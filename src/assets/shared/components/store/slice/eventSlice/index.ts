import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

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
    guests: Record<string, any>;
    meta: Record<string, any>;
    eventProps: Record<string, any>;
    places: any;
    tags: any;
    timetable: any;
    errors: ApiError | null;
}

const initialState: typeEvents = {
    guests: [],
    meta: {
        total_count: 0,
        page_count: 0,
    },
    places: [],
    tags: [],
    timetable: [],
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
    errors: null,
};

export const getEvent = createAsyncThunk("event/getEvent", async function (id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/meeting/${id}/`).then((res) => res.json());
    return response;
});

export const editEvents = createAsyncThunk("event/editEvents", async ({ id, author, title, body }: { id: string; author: number; title: string; body: string }, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/meeting/${id}/`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({ author, title, body }),
        });
        const result = await response.json();

        if (response.status === 200 || response.status === 201) {
        } else {
            return thunkAPI.rejectWithValue(result);
        }
        return result;
    }
});

export const editTimetable = createAsyncThunk(
    "event/editTimetable",
    async ({ id, event_date, start_time, end_time, place }: { id: string; event_date: string; start_time: string; end_time: string; place: string }, thunkAPI) => {
        const token = localStorage.getItem("userToken");
        if (token !== null) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/timetable_update/${id}/`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
                body: JSON.stringify({ event_date, start_time, end_time, place }),
            });
            const result = await response.json();

            if (response.status === 200 || response.status === 201) {
            } else {
                return thunkAPI.rejectWithValue(result);
            }
            return result;
        }
    },
);

export const deleteEvents = createAsyncThunk("event/deleteEvents", async ({ id }: { id: string }, thunkAPI) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/meeting/${id}/`, {
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

            if (response.status === 200 || response.status === 201) {
            } else {
                return thunkAPI.rejectWithValue(result);
            }
            return result;
        }
    },
);

export const createMeeting = createAsyncThunk(
    "event/createMeeting",
    async ({ title, body, timetable, tags }: { title: string; body: string; timetable: string; tags: any }, thunkAPI) => {
        const token = localStorage.getItem("userToken");
        if (token !== null) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/meeting_create/`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
                body: JSON.stringify({ title, body, timetable, tags }),
            });
            const result = await response.json();

            if (response.status === 200 || response.status === 201) {
            } else {
                return thunkAPI.rejectWithValue(result);
            }
            return result;
        }
    },
);

export const getTags = createAsyncThunk("event/getTags", async function () {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/tags_list/`, {
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

export const getTimetable = createAsyncThunk("event/getTimetable", async function () {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/timetable_list/`, {
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

export const getGuest = createAsyncThunk("event/getGuest", async (id: string) => {
    const token = localStorage.getItem("userToken");
    if (token !== null) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meeting-api/v1/meeting/prifils/${id}/`, {
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

const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEvent.fulfilled, (state, action) => {
            state.eventProps = {
                ...action.payload,
            };
            state.loading = false;
        });
        builder.addCase(getEvent.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getEvent.rejected, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getPlaces.fulfilled, (state, action) => {
            state.places = action.payload;
        });
        builder.addCase(getTags.fulfilled, (state, action) => {
            state.tags = action.payload;
        });
        builder.addCase(getTimetable.fulfilled, (state, action) => {
            state.timetable = action.payload;
        });
        builder.addCase(getGuest.fulfilled, (state, action) => {
            state.guests = action.payload;
        });
        builder.addCase(createTimetable.fulfilled, (state, action) => {
            state.errors = null;
        });
        builder.addCase(createTimetable.pending, (state, action) => {
            state.errors = null;
        });
        builder.addCase(createTimetable.rejected, (state, action) => {
            state.errors = action.payload as ApiError;
        });
        builder.addCase(createMeeting.fulfilled, (state, action) => {
            state.errors = null;
        });
        builder.addCase(createMeeting.pending, (state, action) => {
            state.errors = null;
        });
        builder.addCase(createMeeting.rejected, (state, action) => {
            state.errors = action.payload as ApiError;
        });
        builder.addCase(editTimetable.fulfilled, (state, action) => {
            state.errors = null;
        });
        builder.addCase(editTimetable.pending, (state, action) => {
            state.errors = null;
        });
        builder.addCase(editTimetable.rejected, (state, action) => {
            state.errors = action.payload as ApiError;
        });
        builder.addCase(editEvents.fulfilled, (state, action) => {
            state.errors = null;
        });
        builder.addCase(editEvents.pending, (state, action) => {
            state.errors = null;
        });
        builder.addCase(editEvents.rejected, (state, action) => {
            state.errors = action.payload as ApiError;
        });
    },
});

export const {} = eventSlice.actions;

export const selectEventProps = (state: RootState) => state.eventSlice.eventProps;
export const selectPlace = (state: RootState) => state.eventSlice.places;
export const selectTags = (state: RootState) => state.eventSlice.tags;
export const selectTimetable = (state: RootState) => state.eventSlice.timetable;
export const selectGuest = (state: RootState) => state.eventSlice.guests;

export const selectErrorsTimetable = (state: RootState) => state.eventSlice.errors;
export const selectErrorsMeeting = (state: RootState) => state.eventSlice.errors;
export const selectErrorsEditTimetable = (state: RootState) => state.eventSlice.errors;
export const selectErrorsEditEvents = (state: RootState) => state.eventSlice.errors;

export const selectLoadingMeeting = (state: RootState) => state.eventSlice.loading;

export default eventSlice.reducer;
