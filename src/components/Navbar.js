import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo1.jpg";

const Navbar = () => {
  return (
    <div className="navbar container">
      <Link to="/about">
        <div className="navbar__title">
          <h2>ФУРМАНОВ</h2>
          <p>люди и объекты</p>
        </div>
      </Link>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Navbar;
