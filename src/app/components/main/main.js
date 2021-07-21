import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books";
const Main = () => {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const response = await fetch(url);
    const books = await response.json();
    setBooks(books);
  };
  useEffect(() => {
    getBooks();
  }, []);
  const handleDelete = (id) => {
    let newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
    const deleteBook = async () => {
      await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
    };
    deleteBook();
  };

  return (
    <main>
      <h2>All the books</h2>
      <ul className="bookcontainer">
        {books.map((book) => {
          const { id, title, author, total_amount, pages, isbn } = book;
          return (
            <li key={id} className="book">
              <h3>{title}</h3>
              <div>
                <p>{`Author: ${author}`}</p>
                <p>{`Pages: ${pages}`}</p>
                <p>{`Total: ${total_amount}`}</p>
                <p>{`ISBN: ${isbn}`}</p>
              </div>
              <div className="btngroup">
                <Link to={`/book/${id}`} className="button">
                  Edit
                </Link>
                <button
                  className="button"
                  onClick={() => {
                    const confirmBox = window.confirm(
                      "Do you really want to delete this Book?"
                    );
                    if (confirmBox === true) {
                      handleDelete(id);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Main;
