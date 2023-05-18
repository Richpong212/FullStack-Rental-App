import { createSlice } from "@reduxjs/toolkit";

const initialProperty: any = {
  properties: [],
};

export const propertySlice = createSlice({
  name: "property",
  initialState: initialProperty,
  reducers: {
    // get all propertys
    getAllProperties: (state, action) => {
      state.properties = action.payload;
    },
  },
});

export const { getAllProperties } = propertySlice.actions;
