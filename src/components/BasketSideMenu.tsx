import { useNavigate } from "react-router-dom";
import { BasketItem, useBasket } from "../context/useBasket";
import { formatCurrency } from "../utils/formatCurrency";
import { motion } from "framer-motion";
import BasketSideMenuItem from "./BasketSideMenuItem";
import "../styles/basket.css";

type BasketSideMenuProps = {
  onClose: () => void;
};

const BasketSideMenu = ({ onClose }: BasketSideMenuProps) => {
  const { basket, addToBasket, removeFromBasket } = useBasket();

  const total = basket.reduce((acc: number, item: BasketItem) => {
    return acc + item.quantity * item.product.price;
  }, 0);

  const navigate = useNavigate();

  return (
    <div className="basket-menu">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="not-menu"
        onClick={() => onClose()}
      ></motion.div>
      <motion.div
        className="menu"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="item-container">
          {basket.map((item: BasketItem) => (
            <BasketSideMenuItem item={item} key={item.product.id.toString()} />
          ))}
        </div>
        <div className="total">
          <p>Total:</p>
          <p>{formatCurrency(total)}</p>
        </div>
        <div className="basket-footer">
          <button onClick={() => navigate("/checkout")}>Checkout</button>
        </div>
      </motion.div>
    </div>
  );
};

export default BasketSideMenu;
