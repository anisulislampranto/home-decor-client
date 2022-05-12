import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import LoginModal from "../LoginModal/LoginModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="p-2">
        <nav className="sm:flex place-content-evenly w-full items-center">
          <div className="flex gap-40 place-content-evenly">
            <Link
              className="text-2xl font-bold my-auto sm:text-2xl"
              to={"/home"}
            >
              Home Decor
            </Link>
            <button className="lg:hidden sm:hidden hover:bg-slate-300 p-2 rounded">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div className="hidden flex-col sm:block sm:space-x-8">
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
            <Link
              className="hover:text-gray-500"
              to={"/"}
              onClick={() => setShowModal(true)}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} /> Login
            </Link>
            {/* </div> */}
          </div>
        </nav>
      </div>
      {showModal && <LoginModal setShowModal={setShowModal} />}
    </>
  );
};

export default Navbar;
