import axios from "axios";
import { SERVER } from "../constants/server";

export const getProducts = async () => {
  return await axios.get(`${SERVER}/products`);
};

export const getProduct = async (id: string) => {
  return await axios.get(`${SERVER}/products/${id}`);
};

export const addProduct = async (product: any) => {
  return await axios.post(`${SERVER}/products`, product);
};