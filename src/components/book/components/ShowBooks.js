import React, { useState } from "react";
import Book from "./Book";
import "../style.css";

const ShowBooks = ({ books }) => {
  return (
    <div className="showBooks">
      <h1>Discover Books</h1>
      {books.map((book) => (
        <Book
          title={book.title}
          className="book"
          content={book.content}
          link={book.link}
        />
      ))}
    </div>
  );
};

export default ShowBooks;
