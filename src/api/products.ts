import axios from "axios";
import { SERVER } from "../constants/server";

export const getProducts = async () => {
  return await axios.get(`${SERVER}/products`);
};

export const getProduct = async (id: string) => {
  return await axios.get(`${SERVER}/products/${id}`);
};
