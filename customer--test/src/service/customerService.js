import axios from "axios";

// base url
const baseURL = process.env.REACT_APP_API;

// login user
export const loginCustomer = async (user) => {
  const response = await axios.post(`${baseURL}/users/login`, user);
  return response.data;
};
