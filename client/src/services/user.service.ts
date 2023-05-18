import axios from "axios";

const baseUrl = process.env.REACT_APP_API;

// console.log("baseUrl", baseUrl);

interface IUser {
  email: string;
  password: string;
  fullName: string | null;
}

interface IActivation {
  token: string;
}

// register user
export const registerUser = async (user: IUser) => {
  const response = await axios.post(`${baseUrl}/users/register`, user);
  return response.data;
};

// activate user
export const activateUser = async (token: IActivation) => {
  const response = await axios.get(`${baseUrl}/users/activate/${token}`);
  return response.data;
};

// login user
export const loginUser = async (user: any) => {
  const response = await axios.post(`${baseUrl}/users/login`, user);
  return response.data;
};
