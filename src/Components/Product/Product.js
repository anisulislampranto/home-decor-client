import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Product = (props) => {
  const { setShowModal, setUserData } = props;
  const { image, name, price } = props.product;
  console.log(props.product);

  const handleClick = () => {
    setShowModal(true);
    setUserData(props.product);
  };

  return (
    <div className="my-auto group text-center w-72 sm:w-56 h-72 p-3 rounded cursor-pointer mt-20 z-0 border-2 border-gray-200  shadow-md hover:shadow-2xl hover:border-0 ">
      <img
        className="w-full h-4/5 border-2 border-gray-200 group-hover:shadow-2xl rounded hover:border-0"
        src={`data:image/png;base64,${image}`}
        alt=""
      />
      <div className="hidden group-hover:block -mt-6 p-1 bg-black w-24 mx-auto text-white relative z-20 rounded-sm">
        <div className="flex flex-row justify-center gap-4">
          <p
            className=" text-gray-300 hover:text-white text-xs "
            onClick={handleClick}
          >
            Quick Look
          </p>
          <a href="/" className=" text-gray-300 hover:text-white text-xs ">
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
      </div>
      <div className=" h-1/5 py-3">
        <h1>{name}</h1>
        <p className=" group-hover:hidden">${price}</p>
        <button className="hidden mx-auto text-gray-500 hover:text-black group-hover:block group-hover:justify-center -indent-96 group-hover:indent-0 transition duration-300">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
