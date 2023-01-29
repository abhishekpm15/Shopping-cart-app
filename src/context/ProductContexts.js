import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
    const [items,setItems] = useState([])

    const removeItem = (id)=>{
        setItems(items.filter((item)=>item.id !== id))
    }

    const addItem = (item)=>{
        setItems([...items,item])
    }

  const values = {
    items,
    setItems,
    removeItem,
    addItem
  };

  return (
    <ProductContext.Provider value={values}>
        {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
