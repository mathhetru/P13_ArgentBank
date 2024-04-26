import { createSlice } from "@reduxjs/toolkit";
import { profileUser, updateProfileUser } from "../../services/ApiServices.jsx";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    error: null,
  },
  reducers: {
    // updateFirstName: (currentState, action) => {
    //   const user = {
    //     ...currentState.user,
    //     firstName: action.payload,
    //   };
    //   return { ...currentState, user };
    // },
    // updateLastName: (currentState, action) => {
    //   const user = { ...currentState.user, lastName: action.payload };
    //   return { ...currentState, user };
    // },
  },
  extraReducers: function (builder) {
    builder.addCase(profileUser.fulfilled, (state, action) => {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
    });
    builder.addCase(profileUser.rejected, (state, action) => {
      state.firstName = "";
      state.lastName = "";
      state.error = action.payload;
    });
    builder.addCase(updateProfileUser.fulfilled, (state, action) => {
      console.log("updateProfileUser.fulfilled", action.payload);
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
    });
    builder.addCase(updateProfileUser.rejected, (state, action) => {
      state.firstName = "";
      state.lastName = "";
      state.error = action.payload;
    });
  },
});