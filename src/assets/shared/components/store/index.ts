import { Action, combineReducers } from "redux";
import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import menuSlice from "./slice/menuSlice";
import authSlice from "./slice/authSlice";
import eventsSlice from "./slice/eventsSlice";
import eventSlice from "./slice/eventSlice";
import userSlice from "./slice/userSlice";

const rootReducer = combineReducers({
    menuSlice: menuSlice,
    authSlice: authSlice,
    eventsSlice: eventsSlice,
    eventSlice: eventSlice,
    userSlice: userSlice,
});

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export const store = makeStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
