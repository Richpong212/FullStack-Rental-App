import { createSlice } from "@reduxjs/toolkit";

// get Data from local storage
const data =
  localStorage.getItem("data") !== null
    ? JSON.parse(localStorage.getItem("data"))
    : [];

const initialCustomer = {
  data: {
    userData: data.userData,
    token: data.token,
    isLoggedIn: data.isLoggedIn,
  },
};

// create the slice for customer
export const customerSlice = createSlice({
  name: "customer",
  initialState: initialCustomer,
  reducers: {
    login: (state, action) => {
      const { token, user } = action.payload;
      state.data.userData = user;
      state.data.token = token;
      state.data.isLoggedIn = true;
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    logout: (state) => {
      state.data.userData = {};
      state.data.token = "";
      state.data.isLoggedIn = false;
      localStorage.removeItem("data");
    },
  },
});

export const { login, logout } = customerSlice.actions;
