import { useState, useEffect } from "react";
import { getProducts } from "../api/products";
import { ProductType } from "../types/product";

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
      <h1>Products</h1>
      <div className="product-container">
        {!isLoading &&
          products.map((prod) => (
            <div key={prod.id}>
              <h3>{prod.name}</h3>
              <p>{prod.id}</p>
              <p>{prod.description}</p>
              <p>{prod.price} €</p>
              <p>Stock: {prod.stock}</p>
            </div>
          ))}
        {isLoading && <div>Loading...</div>}
      </div>
    </>
  );
};

export default Products;
