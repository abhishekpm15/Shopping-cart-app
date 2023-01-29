import Navbar from "../components/Navbar";
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContexts";

const CartPage = () => {
  const {removeItem, items,itemsCount ,setItemsCount } = useContext(ProductContext);

  return (
    <div>
      <Navbar />
        <div className="text-2xl font-semibold mt-10 mb-5">Cart items</div>
          {items.map((item) => {
            if(itemsCount[item.id]!==0){  
            return (
              <div className="flex justify-center">
              <div key={item.id} className="bg-blue-gray-50 rounded-lg  flex justify-evenly items-center px-3 py-3 w-[70%]">
                <img src={item.image} alt={item.name} className="w-44" />
                <div>
                  <div className="w-44">{item.title}</div>
                  <div className="text-xl font-bold mt-5">{item.price * itemsCount[item.id]} Rs</div>
                  <div className="flex space-x-3 justify-center mt-5">
                  <button className="bg-red-400 text-white px-3 py-1" onClick={()=>{setItemsCount({...itemsCount, [item.id]:itemsCount[item.id]-1})}}>-</button>
                  <div className="bg-gray-200 px-3 py-1">{itemsCount[item.id]}</div>
                  <button className="bg-green-400 text-white px-3 py-1" onClick={()=>{setItemsCount({...itemsCount, [item.id] : itemsCount[item.id]+1})}}>+</button>
                  </div>
                  <button className="text-xl bg-blue-600 text-white px-2 py-2 rounded-lg mt-3" onClick={()=>{removeItem(item.id)}}>Remove Item</button>
                </div>
              </div>
              </div>
            );
            }
          })}
        </div>
  );
};

export default CartPage;
