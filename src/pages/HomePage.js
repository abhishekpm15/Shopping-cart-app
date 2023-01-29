import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

const HomePage = () => {


  return (
    <div>
      <Navbar />
      <div className="mt-[5%] pl-10 pr-10">
        <Product />
      </div>
    </div>
  );
};

export default HomePage;
