import axios from "axios";
import { getAllProperties } from "../redux/Slice/propertiesSlice";

// base url
const baseURL = process.env.REACT_APP_API;

// get All Properties
export const getAllProperty = async (dispatch: any) => {
  const res = await axios.get(`${baseURL}/properties`);
  return dispatch(getAllProperties(res.data.properties));
};

// get a single property
export const getSingleProperty = async (slug: string) => {
  const res = await axios.get(`${baseURL}/properties/${slug}`);
  return res.data;
};

// create a property
export const createProperty = async (data: any, token: string) => {
  const res = await axios.post(`${baseURL}/properties`, data, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};
