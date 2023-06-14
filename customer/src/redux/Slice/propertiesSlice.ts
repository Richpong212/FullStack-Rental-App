import { createSlice } from "@reduxjs/toolkit";

const initialProperty = {
  properties: [],
};

export const propertiesSlice = createSlice({
  name: "properties",
  initialState: initialProperty,
  reducers: {
    getAllProperties: (state, action) => {
      state.properties = action.payload;
    },
  },
});

export const { getAllProperties } = propertiesSlice.actions;
