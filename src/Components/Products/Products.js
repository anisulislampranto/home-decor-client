import React, { useEffect, useState } from "react";
import FilterProduct from "../FilterProduct/FilterProduct";
import Product from "../Product/Product";
import QuickLookModal from "../QuickLookModal/QuickLookModal";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4040/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <FilterProduct />
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 mx-24  justify-items-center z-0">
        {products?.map((data) => (
          <Product
            data={data}
            setShowModal={setShowModal}
            setUserData={setUserData}
          />
        ))}
      </div>
      <>
        {showModal && userData && (
          <QuickLookModal setShowModal={setShowModal} userData={userData} />
        )}
      </>
    </div>
  );
};

export default Products;
