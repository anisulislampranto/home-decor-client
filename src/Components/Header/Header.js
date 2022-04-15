import React from "react";
import Navbar from "../Navbar/Navbar";
import image from "../../images/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash-removebg-preview.png";
import "./Header.css";
import imageTwo from "../../images/sam-moqadam-kvmdsTrGOBM-unsplash-removebg-preview.png";
import imageThree from "../../images/frame-gf0e7ac98f_1920-removebg-preview.png";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-gray-200 h-96 w-full flex flex-col-reverse p-10 pt-0 place-content-evenly items-center sm:flex sm:flex-row sm:p-1 sm:pt-0">
        <div className="my-auto">
          <h1 className="justify-center text-4xl sm:text-4xl">
            THINK DIFFERENT
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600">
            Lorem ipsum dolor sit <br /> amet consectetur adipisicing <br />
            elit. Quo, ab.
          </p>
        </div>

        <div
          style={{ height: "100%", width: "30%" }}
          className="my-auto place-content-evenly items-center slideset1"
          //   id="slideset1"
        >
          <div>
            <img
              className="animate-pulse h-60 w-96 sm:h-96 sm:w-96"
              src={image}
              alt=""
            />
          </div>
          <div>
            <img className="h-60 sm:h-96" src={imageTwo} alt="" />
          </div>
          <div>
            <img className="h-48 sm:h-80" src={imageThree} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
