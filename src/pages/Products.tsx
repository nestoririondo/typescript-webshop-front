import { useState, useEffect } from "react";
import { getProducts } from "../api/products";
import { Product } from "../types/product";
import ProductList from "../components/ProductList";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {!isLoading ? <ProductList products={products} /> : <div>Loading...</div>}
    </>
  );
};

export default Products;
