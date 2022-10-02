import React, { useState, useEffect } from "react";
import "../App";
import axios from "axios";
import BookIsSelected from "./BookIsSelected";

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
        return <BookIsSelected book={book} />;
      })}
    </div>
  );
};

export default BooksList;

//Decided to use Axios to "get" my data from the API
//console log (res.data) will show me the results from the data when I run it in dev tools

//I kept running in to .map is not a function in my browser,
//I had a look at the data and object starts with Items so I decided to add it to line 14
// from there I could drill down results and then show data and access Items
// In my return (line27) I can now drill down to each key value pair that follow the items array

//classNames for calling in css
//I have split value into a div for more granular control with css later I could add lots of class names but
// it will make my code very messy

// (Line 27)This is the return form the Axios get request that pulls the data back to show it in my browser

//
