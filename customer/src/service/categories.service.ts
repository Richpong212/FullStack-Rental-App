import axios from "axios";

// base url
const baseURL = process.env.REACT_APP_API;

// get All Categories
export const getAllCategories = async () => {
  try {
    const res = await axios.get(`${baseURL}/categories`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
