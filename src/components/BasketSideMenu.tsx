import { useNavigate } from "react-router-dom";
import { BasketItem, useBasket } from "../context/useBasket";
import { formatCurrency } from "../utils/formatCurrency";
import BasketSideMenuItem from "./BasketSideMenuItem";
import "../styles/basket.css";

type BasketSideMenuProps = {
  onClose: () => void;
  isBasketOpen: boolean;
};

const BasketSideMenu = ({ onClose, isBasketOpen }: BasketSideMenuProps) => {
  const { basket } = useBasket();

  const total = basket.reduce((acc: number, item: BasketItem) => {
    return acc + item.quantity * item.product.price;
  }, 0);

  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <nav className={isBasketOpen ? "basket-menu visible" : "basket-menu"}>
      <section
        className={isBasketOpen ? "not-menu opaque" : "not-menu"}
        onClick={() => onClose()}
      ></section>
      <section className={isBasketOpen ? "menu active" : "menu"}>
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
          <button onClick={handleGoToCheckout}>Checkout</button>
        </div>
      </section>
    </nav>
  );
};

export default BasketSideMenu;
