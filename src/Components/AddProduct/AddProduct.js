import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [catagory, setCatagory] = useState("");
  const [image, setImage] = useState(null);

  //   console.log(name, price, catagory, image);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("catagory", catagory);
    formData.append("image", image);

    fetch("http://localhost:4040/addproduct", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // setSuccess('Doctor added successfully')
          alert("added");
          console.log("product added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Catagory"
          onChange={(e) => setCatagory(e.target.value)}
        />
        <input
          type="file"
          name=""
          onChange={(e) => setImage(e.target.files[0])}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
