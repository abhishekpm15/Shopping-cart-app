import React, { createContext,  useEffect,  useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {

  
  const defaultItems = () => {
    let cart = [];
    for (let i = 1; i <= 20; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [items, setItems] = useState([]);

  const [itemsCount, setItemsCount] = useState(defaultItems());

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setItemsCount({ ...itemsCount, [id]: itemsCount[id] - 1 });
  };

  const addItem = (item) => {
    setItemsCount({ ...itemsCount, [item.id]: itemsCount[item.id] + 1 });
    if(items.findIndex((it)=> item.id === it.id) === -1){
      setItems([...items, item]);
    }
  };


  const values = {
    items,
    setItems,
    removeItem,
    addItem,
    itemsCount,
    setItemsCount,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
