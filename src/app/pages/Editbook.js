import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const url = "https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books";

const Editbook = () => {
  const { ID } = useParams();
  const [editBook, setEditBook] = useState({}); //get the info of the chosen book, get keep the original value.
  const [change, setChange] = useState({
    title: "", // set all the editable parameteres.
    author: "",
    pages: "", // should be number, but will not be able to edit, if input value is fixed to a number
    total_amount: "",
    isbn: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setChange({ ...change, [name]: value });
    console.log(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(change);
    console.log(editBook);
    const info = {
      ...change,
      pages: parseInt(change.pages),
      total_amount: parseInt(change.total_amount),
    };
    console.log(info);
    fetch(`https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books/${ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const getBooks = async () => {
    const response = await fetch(url);
    const books = await response.json();
    const editBook = await books.find((book) => book.id === ID);
    setEditBook(editBook);
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <form key={editBook.id} className="form">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder={editBook.title}
          value={change.title}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder={editBook.author}
          value={change.author}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="page">Page:</label>
        <input
          type="text"
          name="page"
          id="page"
          placeholder={editBook.pages}
          value={change.pages}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="total">Total:</label>
        <input
          type="text"
          name="total"
          id="total"
          placeholder={editBook.total_amount}
          value={change.total_amount}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="isbn">ISBN:</label>
        <input
          type="text"
          name="isbn"
          id="isbn"
          placeholder={editBook.isbn}
          value={change.isbn}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className="button" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Editbook;
