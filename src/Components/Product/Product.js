import React from "react";

const Product = (props) => {
  const { name, price, catagory, image } = props.data;

  return (
    <div className="my-auto shadow-2xl w-52 p-5 rounded-md">
      <img className=" w-full" src={image} alt="" />
      <h1>{name}</h1>
      <p>${price}</p>
      <p>{catagory}</p>
    </div>
  );
};

export default Product;
