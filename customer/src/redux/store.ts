import { configureStore } from "@reduxjs/toolkit";
import { customerSlice } from "./Slice/customerSlice";
import { propertiesSlice } from "./Slice/propertiesSlice";

// create store
const store = configureStore({
  reducer: {
    // customer: customerSlice.reducer,
    customer: customerSlice.reducer,
    properties: propertiesSlice.reducer,
  },
});

export default store;
