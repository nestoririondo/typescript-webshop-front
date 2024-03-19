import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

const Product = () => {
  const [product, setProduct] = useState({} as Product)
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id, setProduct, setIsLoading);
  }, []);

  return (
    <>
      <h1>Product</h1>
      {!isLoading && product && (
        <div className="product-container">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price} €</p>
          <p>Stock: {product.stock}</p>
        </div>
      )}
      {isLoading && <div>Loading...</div>}
    </>
  );
};

export default Product;
