import React from "react";
import "./Folio.css";


const Folio = () => {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <h3>MGR</h3>
          <div className="list">
            <small>Home</small>
            <small>About</small>
            <small>Works</small>
            <small>Contacts</small>
          </div>
        </div>
        <div className="middle">
          <p>
            Designing for <br />
            Amaizing <br />
            People
          </p>
          <p>
            <small className="set">
              Designing User interfaces for over 6 months <br /> as visual
              designer
            </small>
          </p>
          <button className="click">Hire me</button>
          <div className="image"></div>
        </div>
       
      </div>
    </>
  );
};

export default Folio;
