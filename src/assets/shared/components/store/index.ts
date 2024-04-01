import { Action, combineReducers } from "redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { getMeting } from "./services/getMeeting";
import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import menuSlice from "./slice/menuSlice";
import authSlice from "./slice/authSlice";
// import eventsSlice from "./slice/eventsSlice";
import eventSlice from "./slice/eventSlice";
import { getUser } from "./services/getUser";

const rootReducer = combineReducers({
    menuSlice: menuSlice,
    authSlice: authSlice,
    // eventsSlice: eventsSlice,
    eventSlice: eventSlice,
    [getMeting.reducerPath]: getMeting.reducer,
    [getUser.reducerPath]: getUser.reducer,
});

// export const makeStore = () => {
//     return configureStore({
//         reducer: {
//             rootReducer,
//             [getMeting.reducerPath]: getMeting.reducer,
//         },
//         devTools: process.env.NEXT_PUBLIC_API_URL !== "production",
//         middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([getMeting.middleware]),
//     });
// };
export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.NEXT_PUBLIC_API_URL !== "production",
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([getMeting.middleware, getUser.middleware]),
    });
};

export const store = makeStore();

setupListeners(store.dispatch);
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

// export const wrapper = createWrapper<AppStore>(makeStore);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
