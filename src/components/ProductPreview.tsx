import { formatCurrency } from "../utils/formatCurrency";
import { Product } from "../types/product";
import { useBasket } from "../context/useBasket";
import { useNavigate } from "react-router-dom";

type ItemProps = {
  product: Product;
};

const ProductPreview = ({ product }: ItemProps) => {
  const { addToBasket } = useBasket();
  const { name, description, price, images, id } = product;

  const navigate = useNavigate();

  return (
    <>
      <div key={product.id.toString()} className="product-card">
        <div
          className="product-card-info"
          onClick={() => navigate(`/products/${id}`)}
        >
          <img src={images[0].toString()} alt={name} />
          <div className="product-card-info-text">
            <h2>{name}</h2>
            <p>{description}</p>
            <p className="price">{formatCurrency(price)}</p>
          </div>
        </div>
        <div className="product-card__actions">
          <button onClick={() => addToBasket(product)}>Add</button>
        </div>
      </div>
    </>
  );
};

export default ProductPreview;
