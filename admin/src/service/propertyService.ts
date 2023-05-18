import axios from "axios";
import { getAllProperties } from "../redux/features/propertySlice";

// get API URL
const API_URL = process.env.REACT_APP_API;

// get All Preoperties
export const getAllProperty = async (dispatch: any) => {
  try {
    const res = await axios.get(`${API_URL}/properties`);
    dispatch(getAllProperties(res.data.properties));
  } catch (error) {
    console.log("something went wrong");
  }
};
