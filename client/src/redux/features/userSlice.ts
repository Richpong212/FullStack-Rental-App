import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Get the data from local storage
const data =
  localStorage.getItem("data") !== null
    ? JSON.parse(localStorage.getItem("data") as string)
    : [];

// Define the interface for the user state
interface UserState {
  data: {
    userData: Record<string, unknown>; // Use Record type for userData
    token: string;
    isLoggedIn: boolean;
  };
}

// Define the initial state of the user slice
const initialUser: UserState = {
  data: {
    userData: data.userData,
    token: data.token,
    isLoggedIn: data.isLoggedIn,
  },
};

// Create the user slice
export const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    // Define the login reducer
    login: (
      state,
      action: PayloadAction<{ user: Record<string, unknown>; token: string }>
    ) => {
      const { user, token } = action.payload;
      state.data.userData = user;
      state.data.token = token;
      state.data.isLoggedIn = true;
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    // Define the logout reducer
    logout: (state) => {
      state.data.userData = {};
      state.data.token = "";
      state.data.isLoggedIn = false;
      localStorage.removeItem("data");
    },
  },
});

// Export the actions
export const { login, logout } = userSlice.actions;
