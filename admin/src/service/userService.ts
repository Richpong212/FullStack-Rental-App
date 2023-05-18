import axios from "axios";
import { login, logout } from "../redux/features/userSlice";

// get API URL
const API_URL = process.env.REACT_APP_API;

// login the user
export const loginUser = async (user: any, dispatch: any) => {
  try {
    const res = await axios.post(`${API_URL}/users/login`, user);
    dispatch(login(res.data.properties));
  } catch (error) {
    console.log(error);
  }
};

// logout the user
export const logoutUser = async (dispatch: any) => {
  dispatch(logout());
};
