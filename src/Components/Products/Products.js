import React, { useEffect, useState } from "react";
import FilterProduct from "../FilterProduct/FilterProduct";
import Product from "../Product/Product";
import QuickLookModal from "../QuickLookModal/QuickLookModal";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({});
  const [products, setProducts] = useState([]);

  console.log(showModal);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4040/products");
      const json = await response.json();

      setProducts(json);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <FilterProduct />
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 mx-24  justify-items-center z-0">
        {products?.map((product) => (
          <Product
            product={product}
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
