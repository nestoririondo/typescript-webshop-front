import { BasketItem, useBasket } from "../../context/useBasket";
import { formatCurrency } from "../../utils/formatCurrency";
import { FaRegTrashCan } from "react-icons/fa6";

type BasketSideMenuItemProps = {
  item: BasketItem;
};

const BasketSideMenuItem = ({ item }: BasketSideMenuItemProps) => {
  const { increaseItemQuantity, decrementItemQuantity, deleteFromBasket } =
    useBasket();

  const {
    product: { name, price, images },
  } = item;

  return (
    <div className="item" key={item.product.id.toString()}>
      <img src={images[0]} alt={name} />
      <section className="item-details">
        <div className="item-name-trash">
          <h3>{name}</h3>
          <FaRegTrashCan
            onClick={() => deleteFromBasket(item.product)}
            className="trashcan"
          />
        </div>
        <span className="item-price">{formatCurrency(price)}</span>

        <div className="item-actions-total">
          <div className="item-actions">
            <button onClick={() => decrementItemQuantity(item.product)}>
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseItemQuantity(item.product)}>
              +
            </button>
          </div>
          <section className="total-price">
            <span>{formatCurrency(price * item.quantity)}</span>
          </section>
        </div>
      </section>
    </div>
  );
};

export default BasketSideMenuItem;
