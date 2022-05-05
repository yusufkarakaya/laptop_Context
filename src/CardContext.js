import { createContext, useState } from 'react';

const CardContext = createContext();

export function CardProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (name, price) => {
    setItems((prev) => [...prev, { name, price }]);
  };

  const removeItem = (name) => {
    setItems(items.filter((item) => item.name !== name));
  };

  return (
    <CardContext.Provider value={{ items, addToCart, removeItem }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
