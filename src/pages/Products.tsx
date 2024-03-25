import { useState, useEffect } from "react";
import { getProducts } from "../api/products";
import { ProductType } from "../types/product";
import ProductList from "../components/ProductList";

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
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
      <div className="product-container">
        {!isLoading ? (
          <ProductList products={products} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default Products;
