import axios from "axios";
import { Product } from "../types/product";

const SERVER = "http://localhost:3000";

export const getProducts = async (
  setProducts: (products: Product[]) => void,
  setIsLoading: (isLoading: boolean) => void
) => {
  try {
    const response = await axios.get(`${SERVER}/products`);
    setProducts(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

export const getProduct = async (id: string) => {
  return await axios.get(`${SERVER}/products/${id}`).then((res) => res.data);
};
