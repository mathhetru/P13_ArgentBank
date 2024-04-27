import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./components/user/userSlice";
import { authSlice } from "./components/signin-form/authSlice";

let state = {
  auth: {
    isAuthenticated: false,
    token: null,
    error: null,
  },
  user: {
    firstName: "",
    lastName: "",
  },
};

export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    user: userSlice.reducer,
    auth: authSlice.reducer,
  }),
});
