import React, { useState, useEffect } from "react";
import "../App";
import axios from "axios";

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=HTML5")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="books-list">
      {books.map((book) => {
        return (
          <div>
            <div>
              <h2>Title: {book.volumeInfo.title}</h2>
            </div>
            <div>
              <h3>Author: {book.volumeInfo.authors}</h3>
            </div>
            <div>
              <h4>Pages: {book.volumeInfo.pageCount}</h4>
            </div>
            <div>
              <p>Pages: {book.volumeInfo.description}</p>
            </div>
            <div>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="#" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BooksList;
