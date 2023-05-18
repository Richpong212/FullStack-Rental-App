import { isLoggedIn } from "./../../../../api/src/middleware/user.middleware";
import { createSlice } from "@reduxjs/toolkit";

// get data from local storage
const data =
  localStorage.getItem("data") !== null
    ? JSON.parse(localStorage.getItem("data") as string)
    : [];

interface UserState {
  data: {
    user: any;
    token: string;
    isLoggedIn: boolean;
  };
}

// initial State

const initialUser: UserState = {
  data: {
    user: data.userData,
    token: data.token,
    isLoggedIn: data.isLoggedIn,
  },
};

// create user slice
export const userSlice = createSlice({
  name: "rentaladmin",
  initialState: initialUser,
  reducers: {
    // login reducer
    login: (state, action) => {
      const { user, token } = action.payload;
      state.data.user = user;
      state.data.token = token;
      state.data.isLoggedIn = true;
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    logout: (state) => {
      state.data.user = {};
      state.data.token = "";
      state.data.isLoggedIn = false;
      localStorage.removeItem("data");
    },
  },
});

export const { login, logout } = userSlice.actions;
