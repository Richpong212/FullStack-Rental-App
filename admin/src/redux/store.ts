import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";
import { propertySlice } from "./features/propertySlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    properties: propertySlice.reducer,
  },
});

export default store;
