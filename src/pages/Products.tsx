import { useState, useEffect } from "react";
import { getProducts } from "../api/products";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

const Products = () => {
  const [products, setProducts] = useState([] as Product[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts(setProducts, setIsLoading);
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className="product-container">
        {!isLoading && products.map((prod) => (
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
