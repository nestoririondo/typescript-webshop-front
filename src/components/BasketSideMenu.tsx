import { BasketItem, useBasket } from "../context/useBasket";
import "../styles/basket.css";

const BasketSideMenu = () => {
  const { basket, setBasket } = useBasket();

  return (
    <div className="basket-menu">
      <div className="item-container">
        {basket.map((item: BasketItem) => (
          <div className="item" key={item.product.id.toString()}>
            <p>{item.product.name}</p>
            <p>{item.quantity}</p>
            <p>{item.product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasketSideMenu;
