import axios from "axios";
import { getAllProperties } from "../redux/features/propertySlice";

// base url
const baseURL = process.env.REACT_APP_API;

// get All Properties
export const getAllProperty = async (dispatch) => {
  const res = await axios.get(`${baseURL}/properties`);
  return dispatch(getAllProperties(res.data.properties));
};
