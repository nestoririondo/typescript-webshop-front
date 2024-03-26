import { formatCurrency } from "../utils/formatCurrency";
import { ProductType } from "../types/product";
import { useBasket } from "../context/useBasket";

type ItemProps = {
  product: ProductType;
};

const Item = ({ product }: ItemProps) => {
  const { addToBasket } = useBasket();

  return (
    <div key={product.id.toString()} className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{formatCurrency(product.price)}</p>
      <button onClick={() => addToBasket(product.id)}>Add</button>
    </div>
  );
};

export default Item;
