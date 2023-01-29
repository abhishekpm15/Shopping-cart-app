import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { ProductContext } from "../context/ProductContexts";
const Products = () => {
  const { addItem } = useContext(ProductContext);
  
  const addItemsToCart = (id) =>{
    console.log(id)
    addItem(id)
    toast.success("Added to cart", {
    });

  }
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className="flex flex-wrap justify-center space-x-5 space-y-5">
        {products.map((product) => {
          return (
            <Card className="flex flex-col items-center ">
              <CardHeader floated={false}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-40 h-40"
                />
              </CardHeader>
              <CardBody>
                <h1 className="text-lg font-bold w-56">{product.title}</h1>
              </CardBody>
              <Typography>
                <p className="text-sm font-bold w-56">${product.price}</p>
              </Typography>
              <CardFooter>
                <button className="bg-green-400 rounded-lg px-3 py-2 mt-2 transition hover:scale-110 text-white" onClick={()=>{addItemsToCart(product)}}>
                  Add to Cart
                </button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
