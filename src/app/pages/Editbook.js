import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const url = `https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books`;

const Editbook = () => {
  const { ID } = useParams();
  const [editBook, setEditBook] = useState({});
  const [change, setChange] = useState({
    title: "",
    author: "",
    pages: "",
    total_amount: "",
    isbn: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setChange({ ...change, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const info = {
      title: change.title || editBook.title,
      author: change.author || editBook.author,
      pages: parseInt(change.pages) || editBook.pages,
      total_amount: parseInt(change.total_amount) || editBook.total_amount,
      isbn: change.isbn || editBook.isbn,
    };
    if (/^\s+$/.test(info.title) || /^\s+$/.test(info.author)) {
      alert("Input can't be empty");
    } else {
      if (info.isbn.length == 10 || info.isbn.length == 13) {
        fetch(`${url}/${ID}`, {
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
      } else {
        alert("ISBN should be 10 or 13 numbers");
      }
    }
  };

  const getEditBook = async () => {
    const response = await fetch(`${url}/${ID}`);
    const editBook = await response.json();
    setEditBook(editBook);
    setChange(editBook);
  };
  useEffect(() => {
    getEditBook();
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
        <label htmlFor="pages">Page:</label>
        <input
          type="number"
          name="pages"
          id="pages"
          placeholder={editBook.pages}
          value={change.pages}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="total_amount">Total:</label>
        <input
          type="number"
          name="total_amount"
          id="total_amount"
          placeholder={editBook.total_amount}
          value={change.total_amount}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="isbn">ISBN:</label>
        <input
          type="number"
          name="isbn"
          id="isbn"
          placeholder={editBook.isbn}
          value={change.isbn}
          onChange={handleChange}
        />
        <br />
        <div>
          <button type="submit" className="button" onClick={handleSubmit}>
            Save
          </button>
          <Link to="/" className="button">
            Back Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Editbook;
