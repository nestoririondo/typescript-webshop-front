import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products";
import { ProductType } from "../types/product";

const Product = () => {
  const [product, setProduct] = useState<ProductType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    getProduct(id)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
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
