import React from "react";
import "../style.css";
import book from "../res/book.png";
const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="text-part welcome-div">
        <div className="content">
          <h2>Welcome</h2>
          <p>
            newBook is a new project created by hamouda ben abdennebi to help
            you to discover new authors and books , in newBook you can also
            publish and sell your book
          </p>
        </div>
      </div>
      <div className="deco-part welcome-div">
        <img src={book} />
      </div>
    </div>
  );
};

export default Welcome;
