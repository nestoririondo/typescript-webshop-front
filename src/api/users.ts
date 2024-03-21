import axios from "axios";
import { SERVER } from "../constants/server";
import { User } from "../pages/Signup";

export const createUser = async (data: User) => {
  const response = await axios.post(`${SERVER}/auth/register`, data);
  return response.data;
};