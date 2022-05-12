import React from "react";
import AddProduct from "../../Components/AddProduct/AddProduct";
import Header from "../../Components/Header/Header";
import Products from "../../Components/Products/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <AddProduct />
      <Products />
    </div>
  );
};

export default Home;
