import { configureStore } from "@reduxjs/toolkit";
import { customerSlice } from "./features/customerSlice";
import { PropertySlice } from "./features/propertySlice";

const store = configureStore({
  reducer: {
    customer: customerSlice.reducer,
    property: PropertySlice.reducer,
  },
});

export default store;
