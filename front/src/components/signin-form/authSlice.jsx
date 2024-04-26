import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../services/ApiServices.jsx";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    token: null,
    error: null,
  },
  reducers: {
    // updateToken: (currentState, action) => {
    //   console.log("updateToken action", action.payload);
    //   const token = { ...currentState.auth, token: action.payload };
    //   return { ...currentState, token };
    // },
    logoutUser: (currentState) => {
      currentState.isAuthenticated = false;
      currentState.token = null;
    },
  },
  extraReducers: function (builder) {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.body.token;
      state.isAuthenticated = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.error = action.payload;
    });
  },
});
