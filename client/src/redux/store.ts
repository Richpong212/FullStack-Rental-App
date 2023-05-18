import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";

// Create the store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

// Export the store
export default store;
