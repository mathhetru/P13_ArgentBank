const baseURL = "http://localhost:3001/api/v1";

//V1
// export const loginUser = async (email, password) => {
//   const response = await fetch(`${baseURL}/user/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   if (response.ok) {
//     const userInfo = await response.json();
//     return userInfo;
//   } else {
//     throw new Error(`Error: ${response.status}`);
//   }
// };

// V2
import { createAsyncThunk } from "@reduxjs/toolkit";

// implémentation directe de createAsyncThunk dans l'appel api
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

//V3
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const api = createApi({
//   reducerPath: "api",
//   // baseQuery: fetchBaseQuery({ baseUrl: "localhost:3001/api/v1" }),
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3001/api/v1",
//     // ! prepareHeaders is used to configure the header of every request and gives access to getState which we use to include the token from the store
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.userToken;
//       if (token) {
//         headers.set("authorization", `Bearer ${token}`);
//         return headers;
//       }
//     },
//   }),
//   endpoints: (builder) => ({
//     loginUser: builder.mutation({
//       query: (email, password) => ({
//         url: "/user/login",
//         method: "POST",
//         body: JSON.stringify({ email, password }),
//       }),
//     }),
//     signUpUser: builder.mutation({
//       query: (email, password, firstName, lastName) => ({
//         url: "/user/signup",
//         method: "POST",
//         body: JSON.stringify({ email, password, firstName, lastName }),
//       }),
//     }),
//   }),
// });

// export const { useLoginUserMutation, useSignUpUserMutation } = api;
