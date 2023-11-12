"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  email: string;
  loginTime: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  loginTime: "",
};

export const userSlice = createSlice({
  name: "messageBox",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.loginTime = action.payload.loginTime;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
