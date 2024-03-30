import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Product } from "../types/product";

export type BasketItem = {
  product: Product;
  quantity: number;
};

type BasketContextType = {
  basket: BasketItem[];
  addToBasket: (product: Product) => void;
  removeFromBasket: (product: Product) => void;
};

type BasketProviderProps = {
  children: ReactNode;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: BasketProviderProps) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  useEffect(() => {
    console.log(basket);
  }, [basket]);

  const addToBasket = (product: Product) => {
    const item = basket.find((item) => item.product.id === product.id);
    if (item) {
      item.quantity += 1;
      setBasket([...basket]);
    } else {
      const newItem = { product, quantity: 1 };
      setBasket([...basket, newItem]);
    }
  };

  const removeFromBasket = (product: Product) => {
    const item = basket.find((item) => item.product.id === product.id);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        setBasket([...basket]);
      } else {
        setBasket(basket.filter((item) => item.product.id !== product.id));
      }
    }
  };

  const deleteFromBasket = (product: Product) => {
    setBasket(basket.filter((item) => item.product.id !== product.id));
  };

  const value = { basket, addToBasket, removeFromBasket, deleteFromBasket };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
