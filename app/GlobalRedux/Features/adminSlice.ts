"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface MessageBoxState {
  name: string;
  email: string;
  position: string;
}

const initialState: MessageBoxState = {
  name: "",
  email: "",
  position: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.position = action.payload.position;
    },
  },
});

export const { setAdmin } = userSlice.actions;
export default userSlice.reducer;
