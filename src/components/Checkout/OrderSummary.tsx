import { BasketItem, useBasket } from "../../context/useBasket";
import { FaRegTrashCan } from "react-icons/fa6";
import { formatCurrency } from "../../utils/formatCurrency";
import "../../styles/order-summary.css";

const shipping = 4.95;

const OrderSummary = () => {
  const {
    basket,
    increaseItemQuantity,
    decrementItemQuantity,
    deleteFromBasket,
  } = useBasket();

  const subtotal = basket.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>

      <div className="order">
        <section className="items">
          {basket.map((item: BasketItem) => {
            return (
              <li key={item.product.id.toString()}>
                <img
                  src={item.product.images[0].toString()}
                  alt={item.product.name}
                />
                <section className="description-and-price">
                  <h3>{item.product.name}</h3>
                  <p className="price">{formatCurrency(item.product.price)}</p>
                </section>

                <section className="delete-and-quantity">
                  <FaRegTrashCan
                    className="trashcan"
                    onClick={() => deleteFromBasket(item.product)}
                  />
                  <div className="item-actions">
                    <button onClick={() => increaseItemQuantity(item.product)}>
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => decrementItemQuantity(item.product)}>
                      -
                    </button>
                  </div>
                </section>
              </li>
            );
          })}
        </section>

        <section className="subtotal-and-shipping">
          <div className="subtotal">
            <p>Subtotal</p>
            <p>{formatCurrency(subtotal)}</p>
          </div>
          <div className="shipping">
            <p>Shipping</p>
            <p>{formatCurrency(shipping)}</p>
          </div>
        </section>

        <section className="total">
          <h3>Total</h3>
          <h3>{formatCurrency(subtotal + shipping)}</h3>
        </section>

        <section className="confirm">
          <button>Confirm Order</button>
        </section>
      </div>
    </div>
  );
};

export default OrderSummary;
