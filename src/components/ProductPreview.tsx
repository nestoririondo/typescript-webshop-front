import { formatCurrency } from "../utils/formatCurrency";
import { Product } from "../types/product";
import { useBasket } from "../context/useBasket";
import { useNavigate } from "react-router-dom";

type ItemProps = {
  product: Product;
};

const ProductPreview = ({ product }: ItemProps) => {
  const { addToBasket } = useBasket();
  const { name, description, price, id } = product;

  const navigate = useNavigate();

  return (
    <>
      <div
        key={product.id.toString()}
        onClick={() => navigate(`/products/${product.id}`)}
        className="product-card"
      >
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{formatCurrency(price)}</p>
      </div>
      <div className="product-card__actions">
        <button onClick={() => addToBasket(product)}>Add</button>
      </div>
    </>
  );
};

export default ProductPreview;
