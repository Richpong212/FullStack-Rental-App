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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
