const baseURL = "http://localhost:3001/api/v1";

import { createAsyncThunk } from "@reduxjs/toolkit";

// direct call to the api in the createAsyncThunk implementation
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userInfo = await response.json();
        return userInfo;
      } else {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const profileUser = createAsyncThunk(
  "user/profile",
  async (token, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/user/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userInfo = await response.json();
        return userInfo;
      } else {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProfileUser = createAsyncThunk(
  "user/updateProfile",
  async ({ token, firstName, lastName }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/user/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ firstName: firstName, lastName: lastName }),
      });

      if (response.ok) {
        const userInfo = await response.json();
        return userInfo;
      } else {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
