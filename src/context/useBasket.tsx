import { createContext, useState, useContext, ReactNode } from "react";

type BasketProduct = {
  id: string;
  quantity: number;
};

type BasketContextType = {
  basket: BasketProduct[];
  addToBasket: (productId: string) => void;
  removeFromBasket: (productId: string) => void;
};

type BasketProviderProps = {
  children: ReactNode;
};
const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: BasketProviderProps) => {    
  const [basket, setBasket] = useState<BasketProduct[]>([]);

  const addToBasket = (productId: string) => {
    const product = basket.find((product) => product.id === productId);
    if (product) {
      product.quantity += 1;
      setBasket([...basket]);
    } else {
      const newProduct = { id: productId, quantity: 1 };
      setBasket([...basket, newProduct]);
    }
    console.log(basket)
  };

  const removeFromBasket = (productId: string) => {
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
