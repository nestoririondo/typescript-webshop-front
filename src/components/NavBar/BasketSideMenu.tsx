import { useNavigate } from "react-router-dom";
import { BasketItem, useBasket } from "../../context/useBasket";
import { formatCurrency } from "../../utils/formatCurrency";
import BasketSideMenuItem from "./BasketSideMenuItem";
import "../../styles/basket.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

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
    <nav className={`basket-menu ${isBasketOpen ? "visible" : ""}`}>
      <section
        className={`not-menu ${isBasketOpen ? "opaque" : ""}`}
        onClick={() => onClose()}
      ></section>
      <section className={`menu ${isBasketOpen ? "active" : ""}`}>
        <div className="close-icon-wrapper" onClick={onClose}>
          <IoIosCloseCircleOutline className="close-icon" />
        </div>

        {basket.length === 0 ? (
          <section className="empty">
            <p className="empty-basket">Your basket is empty</p>
            <button
              onClick={() => {
                onClose();
                navigate("/products");
              }}
            >
              Go to the shop
            </button>
          </section>
        ) : (
          <>
            <div className="item-container">
              {basket.map((item: BasketItem) => (
                <BasketSideMenuItem
                  item={item}
                  key={item.product.id.toString()}
                />
              ))}
            </div>
            <div className="total">
              <p>Total:</p>
              <p>{formatCurrency(total)}</p>
            </div>
            <div className="basket-footer">
              <button onClick={handleGoToCheckout}>Checkout</button>
            </div>
          </>
        )}
      </section>
    </nav>
  );
};

export default BasketSideMenu;
