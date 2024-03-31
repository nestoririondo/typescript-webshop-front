import { BasketItem, useBasket } from "../context/useBasket";
import { formatCurrency } from "../utils/formatCurrency";

type BasketSideMenuItemProps = {
  item: BasketItem;
};

const BasketSideMenuItem = ({ item }: BasketSideMenuItemProps) => {
  const { increaseItemQuantity, decrementItemQuantity } = useBasket();

  const {
    product: { name, price, images },
  } = item;

  return (
    <div className="item" key={item.product.id.toString()}>
      <img src={images[0]} alt={name} />
      <section className="item-details">
        <h3>{name}</h3>
        <p>{formatCurrency(price)}</p>
        <div className="item-actions">
          <button onClick={() => increaseItemQuantity(item.product)}>+</button>
          <p>{item.quantity}</p>
          <button onClick={() => decrementItemQuantity(item.product)}>-</button>
        </div>
      </section>
      <section className="total-price">
        <p>{formatCurrency(price * item.quantity)}</p>
      </section>
    </div>
  );
};

export default BasketSideMenuItem;
