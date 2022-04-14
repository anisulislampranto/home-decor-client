import React from "react";
import Navbar from "../Navbar/Navbar";
import image from "../../images/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash-removebg-preview.png";
import "./Header.css";
import imageTwo from "../../images/sam-moqadam-kvmdsTrGOBM-unsplash-removebg-preview.png";
import imageThree from "../../images/mutzii-vHLa285gvcU-unsplash-removebg-preview.png";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-gray-200 h-96 w-full flex justify-evenly">
        <div className="my-auto">
          <h1 className="justify-center text-4xl sm:text-7xl">
            Think Defferent
          </h1>
          <p className="text-xl sm:text-4xl">
            Lorem ipsum dolor sit <br /> amet consectetur adipisicing <br />
            elit. Quo, ab.
          </p>
        </div>
        {/* <div>
          <img className="animate-pulse" src={image} alt="" />
        </div> */}
        <div style={{ height: "100%", width: "40%" }} id="slideset1">
          <div className="w-full sm:w-5/6 my-auto">
            <img id="image-one" className="animate-pulse" src={image} alt="" />
          </div>
          <div className="w-full my-10">
            <img className="" src={imageTwo} alt="" />
          </div>
          <div className="w-full my-10">
            <img className="" src={imageThree} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
