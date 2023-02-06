import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const Navbar = () => {
  return (
    <div className="flex list-none pl-3 pr-3 pt-3 justify-around">
      
      <div className="flex justify-start space-x-8 text-white">
        <Button><Link to="/">HOME </Link></Button>
        <Button><Link to="/about"> ABOUT</Link></Button>
        <Button><Link to="/contact">CONTACT</Link></Button>
      </div>

      <div>
        <input type="text" placeholder="Search" className="rounded-lg px-3 py-2 border-2 border-gray-900 w-96" />
      </div>

      <div className="flex justify-end space-x-8 text-white">
      <Button><Link to="/cart">CART</Link></Button>
      <Button><Link to="/login">LOGIN</Link></Button>
      </div>
      
    </div>
  );
};

export default Navbar;
