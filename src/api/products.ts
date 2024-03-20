import axios from "axios";

const SERVER = "http://localhost:3000";

export const getProducts = async () => {
  return await axios.get(`${SERVER}/products`).then((res) => res.data);
};

export const getProduct = async (id: string) => {
  return await axios.get(`${SERVER}/products/${id}`).then((res) => res.data);
};
