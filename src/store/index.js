import { configureStore} from "@reduxjs/toolkit";
import {userConfigSlice} from "./features/UserSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {PersonSlice} from "./features/PersonSlice";
const persistConfig = {
    key: 'User',
    storage,
}

export const store = configureStore({
    reducer: {
        userConfigSlice: persistReducer(persistConfig,userConfigSlice.reducer),
        [PersonSlice.name]:PersonSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV !== "production",
})