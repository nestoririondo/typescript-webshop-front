import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products";
import { ProductType } from "../types/product";
import ProductDetails from "../components/ProductDetails";

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
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ProductDetails product={product} />
      )}
    </>
  );
};

export default Product;
