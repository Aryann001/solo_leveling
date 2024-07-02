import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "user",
  initialState: { user: {} },
  reducers: {
    LOGIN_USER_REQUEST: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
  },
});
