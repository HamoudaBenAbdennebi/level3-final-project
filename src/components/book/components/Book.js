import React from "react";
import "../style.css";
const Book = ({ title, content }) => {
  return (
    <div className="book">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Book;
