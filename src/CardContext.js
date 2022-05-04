import { createContext, useState } from 'react';

const CardContext = createContext();

export function CardProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCard = (name, price) => {
    setItems((prevState) => [...prevState, { name, price }]);
  };

  const handleRemoveItem = (name) => {
    setItems(items.filter((item) => item.name !== name));
  };

  return (
    <CardContext.Provider value={{ items, addToCard, handleRemoveItem }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
