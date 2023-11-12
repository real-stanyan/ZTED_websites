"use client";

import { configureStore } from "@reduxjs/toolkit";
import messageBoxReducer from "./Features/messageBoxSlice";
import userReducer from "./Features/userSlice";
import adminReducer from "./Features/adminSlice";

export const store = configureStore({
  reducer: {
    messageBox: messageBoxReducer,
    user: userReducer,
    admin: adminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
