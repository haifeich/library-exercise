import React, { useState, useEffect } from "react";

const url = "https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books";
const Records = () => {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const response = await fetch(url);
    const books = await response.json();
    setBooks(books);
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div>
      <h2>Changes in one week</h2>
      {/* <ul className="bookcontainer">
        {books.map((book) => {
          if (parseInt(book.id) >= Date.now() - 604800000) {
            const { id, title, author, total_amount, pages, isbn } = book;
            const date = new Date(parseInt(id)).toLocaleString();
            return (
              <li key={id} className="book">
                <h4>{title}</h4>
                <div>
                  <p>{`Author: ${author}`}</p>
                  <p>{`Pages: ${pages}`}</p>
                  <p>{`Total: ${total_amount}`}</p>
                  <p>{`ISBN: ${isbn}`}</p>
                  <p>{`Edited: ${date}`}</p>
                </div>
              </li>
            );
          }
        })}
      </ul> */}
    </div>
  );
};

export default Records;
