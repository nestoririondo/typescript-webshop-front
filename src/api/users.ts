import axios from "axios";
import { SERVER } from "../constants/server";
import { SignUpData } from "../pages/Signup";

export const createUser = async (data: SignUpData) => {
  return await axios.post(`${SERVER}/auth/register`, data).then((response)=> response.data);
};