import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
const Start = () => {
  return (
    <div className="start-component">
      <h2>Get started</h2>
      <div>
        <Link className="link" to="/login">
          Login
        </Link>
        <Link to="/show-books" className="link">
          My books
        </Link>
        <Link to="/show-books" className="link">
          Discover books
        </Link>
      </div>
    </div>
  );
};

export default Start;
