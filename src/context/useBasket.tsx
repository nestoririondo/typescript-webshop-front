import { createContext, useState, useContext, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

export type BasketProduct = {
  id: typeof uuidv4;
  quantity: number;
};

type BasketContextType = {
  basket: BasketProduct[];
  addToBasket: (productId: typeof uuidv4) => void;
  removeFromBasket: (productId: typeof uuidv4) => void;
};

type BasketProviderProps = {
  children: ReactNode;
};
const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: BasketProviderProps) => {    
  const [basket, setBasket] = useState<BasketProduct[]>([]);

  const addToBasket = (productId: BasketProduct["id"]) => {
    const product = basket.find((product) => product.id === productId);
    if (product) {
      product.quantity += 1;
      setBasket([...basket]);
    } else {
      const newProduct = { id: productId, quantity: 1 };
      setBasket([...basket, newProduct]);
    }
  };

  const removeFromBasket = (productId: BasketProduct["id"]) => {
    const product = basket.find((product) => product.id === productId);
    if (product) {
      product.quantity -= 1;
      setBasket([...basket]);
    } else {
      const newBasket = basket.filter((product) => product.id !== productId);
      setBasket(newBasket);
    }
  };

  const value = { basket, addToBasket, removeFromBasket };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
