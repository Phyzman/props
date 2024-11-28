import React from "react";
import "./Card.css";
import img1 from "../../assets/tesla.jpg";
import img2 from "../../assets/gle.jpg";
import img3 from "../../assets/automobili.jpg";
import img4 from "../../assets/toyota.jpg";
import img5 from "../../assets/mercedes.jpg";
import img6 from "../../assets/rxb.jpg";
import img7 from "../../assets/porsche.jpg";
import img8 from "../../assets/byd.jpg";
import img9 from "../../assets/royce.jpg";
import Button from "../button/Button";
const Card = () => {
  const data = [
    {
      image: img1,
      name: "Tesla",
      price: "$800,000",
      desc: "This is a Tesla.",
    },
    {
      image: img3,
      name: "Automobili Ardent",
      price: "$550,000",
      desc: "This is a Automobili Ardent.",
    },
    {
      image: img2,
      name: "GLE",
      price: "$44,000",
      desc: "This is a GLE.",
    },
    {
      image: img4,
      name: "Toyota Avalon",
      price: "$39,000",
      desc: "This is a Toyota Avalon.",
    },
    {
      image: img5,
      name: "Mercedes Maybach",
      price: "$102,000",
      desc: "This is a Mercedes Maybach.",
    },
    {
      image: img6,
      name: "Rx-350",
      price: "$27,000",
      desc: "This is Rx-350.",
    },
    {
      image: img7,
      name: "Porsche",
      price: "$70,000",
      desc: "This is a Porsche.",
    },
    {
      image: img8,
      name: "BYB",
      price: "$95,000",
      desc: "This is a.",
    },
    {
      image: img9,
      name: "Mercedes Benz",
      price: "$50,000",
      desc: "This is a Mercedes Benz.",
    },
  ];
  return (
    <>
      <div className="cardContainer">
        {data.map((project, index) => (
          <div key={index} className="card">
            <img src={project.image} alt="site" className="image" />
            <h1>{project.name}</h1>
            <p>{project.price}</p>
            <p>{project.desc}</p>
            <Button title="Add to cart" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
