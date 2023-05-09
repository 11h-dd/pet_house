import { configureStore} from "@reduxjs/toolkit";
import {userConfigSlice} from "./features/UserSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
const persistConfig = {
    key: 'User',
    storage,
}

export const store = configureStore({
    reducer: {
        userConfigSlice: persistReducer(persistConfig,userConfigSlice.reducer) ,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV !== "production",
})