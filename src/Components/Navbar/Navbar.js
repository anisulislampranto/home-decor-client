import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-nowrap place-content-evenly w-full h-12 items-center">
      <Link className="text-4xl" to={"/home"}>
        Home Decor
      </Link>
      <Link to={"/home"}>Shop</Link>
      <Link to={"/aboutus"}>About Us</Link>
      <Link to={"/contactus"}>Contact Us</Link>
      <Link to={"/cart"}>Cart</Link>
      <Link to={"/wishlist"}>WISHLIST</Link>
      <Link to={"/Login"}>Login</Link>
    </nav>
  );
};

export default Navbar;
