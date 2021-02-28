import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <p>newBooks</p>
      <Link to="/login" className="login-button">
        LOGIN
      </Link>
    </div>
  );
};

export default Navbar;
