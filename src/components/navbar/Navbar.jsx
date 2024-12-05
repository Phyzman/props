import React from "react";
import "./Navbar.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Products</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
