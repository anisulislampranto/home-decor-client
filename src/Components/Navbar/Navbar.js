import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-nowrap h-10 place-content-between w-full p-3">
      <Link to={"/home"}>Home Decor</Link>
      <div className="place-content-around">
        <Link to={"/home"}>Shop</Link>
        <Link to={"/aboutus"}>About Us</Link>
        <Link to={"/contactus"}>Contact Us</Link>
      </div>
      <div className="place-content-around">
        <Link to={"/cart"}>Shop</Link>
        <Link to={"/wishlist"}>WISHLIST</Link>
        <Link to={"/Login"}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
