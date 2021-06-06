import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const url = `https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books`;

const Add = () => {
  const [addBook, setAddBook] = useState({
    id: "",
    title: "",
    author: "",
    pages: "",
    total_amount: "",
    isbn: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddBook({ ...addBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s+$/.test(addBook.title) || /^\s+$/.test(addBook.author)) {
      alert("Input can't be empty");
    } else if (addBook.pages === "0" || addBook.total_amount === "0") {
      alert("Input can't be 0");
    } else if (addBook.isbn.length !== 10 && addBook.isbn.length !== 13) {
      alert("ISBN should be 10 or 13 numbers");
    } else {
      const data = {
        ...addBook,
        id: new Date().getTime().toString(),
        pages: parseInt(addBook.pages),
        total_amount: parseInt(addBook.total_amount),
      };
      fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  return (
    <div>
      <form className="form">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={addBook.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          name="author"
          id="author"
          value={addBook.author}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="pages">Page:</label>
        <input
          type="number"
          name="pages"
          id="pages"
          value={addBook.pages}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="total_amount">Total:</label>
        <input
          type="number"
          name="total_amount"
          id="total_amount"
          value={addBook.total_amount}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="isbn">ISBN:</label>
        <input
          type="number"
          name="isbn"
          id="isbn"
          value={addBook.isbn}
          onChange={handleChange}
        />
        <br />
        <div className="btngroup">
          <button type="submit" className="button" onClick={handleSubmit}>
            Add
          </button>
          <Link to="/" className="button">
            Back Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Add;
