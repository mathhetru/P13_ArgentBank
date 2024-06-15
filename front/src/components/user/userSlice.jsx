import { createSlice } from "@reduxjs/toolkit";
import { profileUser, updateProfileUser } from "../../services/ApiServices.jsx";
import { authSlice } from "../signin-form/authSlice.jsx";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    error: null,
  },
  extraReducers: function (builder) {
    builder.addCase(profileUser.fulfilled, (state, action) => {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
      state.error = "";
    });
    builder.addCase(authSlice.actions.logoutUser, (state) => {
      state.firstName = "";
      state.lastName = "";
    });
    // dispatch error if rejected promise (such as network error or user not found)
    builder.addCase(profileUser.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(updateProfileUser.fulfilled, (state, action) => {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
      state.error = "";
    });
    builder.addCase(updateProfileUser.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
