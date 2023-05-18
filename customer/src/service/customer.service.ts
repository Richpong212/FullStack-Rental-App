import axios from "axios";

// base url for API
const baseUrl = process.env.REACT_APP_API;

// login the user
export const loginCustomer = async (user: any) => {
  const response = await axios.post(`${baseUrl}/users/login`, user);
  return response.data;
};

// register the user
export const registerCustomer: any = async (user: any) => {
  const response = await axios.post(`${baseUrl}/users/register`, user);
  return response.data;
};

// activate the user
export const activateUser = async (token: String) => {
  const response = await axios.get(`${baseUrl}/users/activate/${token}`);
  return response.data;
};
