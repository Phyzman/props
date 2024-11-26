import React from "react";
import './Navbar.css' 

const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <h1 style={{ color: "red", fontSize: "32px" }}>
          This is Navbar component.
        </h1>
        <p id="words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis at eligendi deleniti? Perferendis nesciunt non ut distinctio? Quo provident perferendis, distinctio, incidunt vero nesciunt voluptas nulla dicta necessitatibus quae dolore.</p>
      </div>
    </>
  );
};

export default Navbar;
