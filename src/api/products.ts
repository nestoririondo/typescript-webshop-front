import axios from "axios";

const SERVER = "http://localhost:3000";

export const getProducts = async (setProducts, setIsLoading) => {
  try {
    const response = await axios.get(`${SERVER}/products`);
    setProducts(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

export const getProduct = async (id, setProduct, setIsLoading) => {
  try {
    const response = await axios.get(`${SERVER}/products/${id}`);
    setProduct(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};
