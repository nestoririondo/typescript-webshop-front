import { BasketItem, useBasket } from "../context/useBasket";
import "../styles/basket.css";
import { formatCurrency } from "../utils/formatCurrency";
import { motion } from "framer-motion";

type BasketSideMenuProps = {
  onClose: () => void;
};

const BasketSideMenu = ({ onClose }: BasketSideMenuProps) => {
  const { basket, addToBasket, removeFromBasket } = useBasket();

  return (
    <div className="basket-menu">
      <div className="not-menu" onClick={() => onClose()}></div>
      <motion.div
        className="menu"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="item-container">
          {basket.map((item: BasketItem) => (
            <div className="item" key={item.product.id.toString()}>
              <img
                src="https://via.placeholder.com/150"
                alt={item.product.name}
              />
              <section className="item-details">
                <h3>{item.product.name}</h3>
                <p>{formatCurrency(item.product.price)}</p>
                <div className="item-actions">
                  <button onClick={() => addToBasket(item.product)}>+</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => removeFromBasket(item.product)}>
                    -
                  </button>
                </div>
              </section>
              <section className="total-price">
                <p>{formatCurrency(item.product.price * item.quantity)}</p>
              </section>
            </div>
          ))}
        </div>
        <div className="basket-footer">
          <button>Checkout</button>
        </div>
      </motion.div>
    </div>
  );
};

export default BasketSideMenu;
