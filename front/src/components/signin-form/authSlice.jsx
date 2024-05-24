import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../services/ApiServices.jsx";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
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
      currentState.token = null;
    },
  },
  extraReducers: function (builder) {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.body.token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
