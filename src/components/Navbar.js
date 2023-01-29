import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex list-none pl-3 pr-3 pt-3 justify-around">
      <div className="flex justify-start space-x-8 text-white">
        <li className="bg-purple-400 rounded-lg px-3 py-2 hover:bg-purple-300"><Link to="/">HOME </Link></li>
       <li className="bg-purple-400 rounded-lg px-3 py-2 hover:bg-purple-300"><Link to="/about"> ABOUT</Link></li>
        <li className="bg-purple-400 rounded-lg px-3 py-2 hover:bg-purple-300"><Link to="/contact">CONTACT</Link></li>
      </div>
      <div>
        <input type="text" placeholder="Search" className="rounded-lg px-3 py-2 border-2 border-gray-900 w-96" />
      </div>
      <div className="flex justify-end space-x-8 text-white">
        <li className="bg-purple-400 rounded-lg px-3 py-2 hover:bg-purple-300"><Link to="/cart">CART</Link></li>
        <li className="bg-purple-400 rounded-lg px-3 py-2 hover:bg-purple-300"><Link to="/login">LOGIN</Link></li>
      </div>
    </div>
  );
};

export default Navbar;
