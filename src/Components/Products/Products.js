import React from "react";
import FilterProduct from "../FilterProduct/FilterProduct";
import fakeData from "../../fakeData.json";
import Product from "../Product/Product";

const Products = () => {
  return (
    <div>
      <FilterProduct />
      <div className="grid grid-cols-3 justify-items-center mt-8">
        {fakeData.map((data) => (
          <Product data={data} />
        ))}
      </div>
    </div>
  );
};

export default Products;
