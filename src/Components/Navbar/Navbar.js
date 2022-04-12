import React from "react";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="sm:flex flex place-content-evenly w-full items-center">
      <div className="space-x-56 items-center justify-center">
        <Link className="text-4xl font-bold my-auto" to={"/home"}>
          Home Decor
        </Link>
        <button className="lg:hidden sm:hidden hover:bg-slate-300 p-2 rounded my-auto">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="hidden flex-col sm:block sm:space-x-20">
        <Link className="hover:text-gray-500" to={"/shop"}>
          Shop
        </Link>
        <Link className="hover:text-gray-500" to={"/aboutus"}>
          About Us
        </Link>
        <Link className="hover:text-gray-500" to={"/contactus"}>
          Contact Us
        </Link>
        {/* <div className="space-x-8"> */}
        <Link className="hover:text-gray-500" to={"/cart"}>
          Cart($0)
        </Link>
        <Link className="hover:text-gray-500" to={"/wishlist"}>
          <FontAwesomeIcon icon={faHeart} />
          (0)
        </Link>
        <Link className="hover:text-gray-500" to={"/Login"}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> Login
        </Link>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
