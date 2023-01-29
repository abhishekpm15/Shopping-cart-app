import Navbar from "../components/Navbar";
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContexts";
// import { Card,CardBody,CardHeader } from "@material-tailwind/react";

const CartPage = () => {
  const { items } = useContext(ProductContext);

  return (
    <div>
      <Navbar />
      <div>
        <div className="text-2xl font-semibold mt-10 mb-5">Cart items</div>
        <div className="flex justify-center flex-col ml-5 mr-5 space-y-5">
          {items.map((item) => {
            return (
              <div key={item.id} className="bg-blue-gray-50 rounded-lg  flex justify-evenly items-center px-3 py-3">
                <img src={item.image} alt={item.name} className="w-44" />
                <div>
                  <div className="w-44">{item.title}</div>
                  <div className="text-xl font-bold mt-5">{item.price}</div>
                  <div className="flex space-x-3 justify-center mt-5">
                  <button className="bg-green-400 text-white px-3 py-1">+</button>
                  <button className="bg-red-400 text-white px-3 py-1">-</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
