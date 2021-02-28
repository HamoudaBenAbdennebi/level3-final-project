import React, { useState } from "react";
import ShowBooks from "./components/ShowBooks";

const BookMain = () => {
  const [books, setBooks] = useState([]);
  const handleSubmit = (e, books, setBooks, input, setInput) => {
    e.preventDefault();
    setBooks([...books, { title: input.title, content: input.content }]);
    setInput("");
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };
  const [input, setInput] = useState({});
  return (
    <div className="bookmain">
      <h1 style={{ textAlign: "center" }}>Add a book</h1>
      <form
        className="formAdd"
        onSubmit={(e) => handleSubmit(e, books, setBooks, input, setInput)}
      >
        <input
          name="title"
          onChange={handleChange}
          value={input.title}
          placeholder="title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={input.content}
          placeholder="content"
        ></textarea>
        <button type="submit">submit</button>
      </form>
      <ShowBooks books={books} />
    </div>
  );
};

export default BookMain;
