import axios from "axios";
import { SERVER } from "../constants/server";
import { Product } from "../types/product";
import { AxiosResponse } from "axios";

export const getProducts = async (): Promise<AxiosResponse<Product[]>> => {
  return await axios.get(`${SERVER}/products`);
};

export const getProduct = async (
  id: string
): Promise<AxiosResponse<Product>> => {
  return await axios.get(`${SERVER}/products/${id}`);
};

export const addProduct = async (
  product: Product
): Promise<AxiosResponse<Product>> => {
  return await axios.post(`${SERVER}/products`, product);
};
