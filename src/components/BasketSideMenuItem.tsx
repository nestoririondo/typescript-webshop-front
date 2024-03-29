import { BasketItem, useBasket } from "../context/useBasket";
import { formatCurrency } from "../utils/formatCurrency";

type BasketSideMenuItemProps = {
  item: BasketItem;
};

const BasketSideMenuItem = ({ item }: BasketSideMenuItemProps) => {
  const { addToBasket, removeFromBasket } = useBasket();

  return (
    <div className="item" key={item.product.id.toString()}>
      <img src={item.product.images[0].toString()} alt={item.product.name} />
      <section className="item-details">
        <h3>{item.product.name}</h3>
        <p>{formatCurrency(item.product.price)}</p>
        <div className="item-actions">
          <button onClick={() => addToBasket(item.product)}>+</button>
          <p>{item.quantity}</p>
          <button onClick={() => removeFromBasket(item.product)}>-</button>
        </div>
      </section>
      <section className="total-price">
        <p>{formatCurrency(item.product.price * item.quantity)}</p>
      </section>
    </div>
  );
};

export default BasketSideMenuItem;
