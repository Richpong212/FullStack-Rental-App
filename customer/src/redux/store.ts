import { configureStore } from "@reduxjs/toolkit";
import { customerSlice } from "./Slice/customerSlice";

// create store
const store = configureStore({
  reducer: {
    // customer: customerSlice.reducer,
    customer: customerSlice.reducer,
  },
});

export default store;
