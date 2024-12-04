import React, { useEffect, useState } from "react";
const FectchData = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    // console.log(data.products);
    setProducts(data.products);
  };
  useEffect(() => {
    getData();
  });
  return (
    <>
      {products.map((item, index) => (
        <div key={index}>
          <p>{item.brand}</p>
          <img src={item.images[0]} alt="product" />
        </div>
      ))}
    </>
  );
};

export default FectchData;
