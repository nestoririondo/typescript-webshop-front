import axios from "axios";
import { SERVER } from "../constants/server";

export const getProducts = async () => {
  const response = await axios.get(`${SERVER}/products`);
  return response.data;
};

export const getProduct = async (id: string) => {
  const response = await axios.get(`${SERVER}/products/${id}`);
  return response.data;
};
