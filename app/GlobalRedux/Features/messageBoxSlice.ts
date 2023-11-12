"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface MessageBoxState {
  message: string;
  type: string;
}

const initialState: MessageBoxState = {
  message: "",
  type: "",
};

export const messageBoxSlice = createSlice({
  name: "messageBox",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
  },
});

export const { setMessage } = messageBoxSlice.actions;
export default messageBoxSlice.reducer;
