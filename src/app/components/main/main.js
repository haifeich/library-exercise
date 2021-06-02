import React, { useState, useEffect } from "react";

const url = "https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books";
const Main = () => {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const response = await fetch(url);
    console.log(response);
    const books = await response.json();
    setBooks(books);
    console.log(books);
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <main>
      <h2>All the books</h2>
      <ul className="bookcontainer">
        {books.map((book) => {
          const { id, title, author, total_amount, pages, isbn } = book;
          return (
            <li key={id} className="book">
              <h4>{title}</h4>
              <div>
                <p>{`Author: ${author}`}</p>
                <p>{`Pages: ${pages}`}</p>
                <p>{`Total: ${total_amount}`}</p>
                <p>{`ISBN: ${isbn}`}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Main;
