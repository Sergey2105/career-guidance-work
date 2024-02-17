import { Action, combineReducers } from "redux";
import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import menuSlice from "./slice/menuSlice";
import authSlice from "./slice/authSlice";
import eventSlice from "./slice/eventsSlice";

const rootReducer = combineReducers({
    menu: menuSlice,
    auth: authSlice,
    event: eventSlice,
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
