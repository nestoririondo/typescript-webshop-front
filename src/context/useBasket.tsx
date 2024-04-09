import { createContext, useState, useContext, ReactNode } from "react";
import { Product } from "../types/product";

export type BasketItem = {
  product: Product;
  quantity: number;
};

type BasketContextType = {
  basket: BasketItem[];
  increaseItemQuantity: (product: Product) => void;
  decrementItemQuantity: (product: Product) => void;
  deleteFromBasket: (product: Product) => void;
};

type BasketProviderProps = {
  children: ReactNode;
};

export function useBasket() {
  const value = useContext(BasketContext);

  if (value === undefined) {
    throw new Error("useBasket must be wrapped in a <BasketProvider />");
  }

  return value;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: BasketProviderProps) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const increaseItemQuantity = (product: Product, quantity: number = 1) => {
    const item = basket.find((item) => item.product.id === product.id);
    if (item) {
      item.quantity += 1;
      setBasket([...basket]);
    } else {
      const newItem = { product, quantity: quantity };
      setBasket([...basket, newItem]);
    }
  };

  const decrementItemQuantity = (product: Product) => {
    const item = basket.find((item) => item.product.id === product.id);
    if (!item) return;
    if (item.quantity > 1) {
      item.quantity -= 1;
      setBasket([...basket]);
    }
  };

  const deleteFromBasket = (product: Product) => {
    setBasket(basket.filter((item) => item.product.id !== product.id));
  };

  const value = {
    basket,
    increaseItemQuantity,
    decrementItemQuantity,
    deleteFromBasket,
  };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};
