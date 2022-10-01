import React, { useState, useEffect } from "react";
import "../App";
import axios from "axios";

// const MaxWords = 140;
// render() {
//   const { text } = this.props;
// }

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState(false);


  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=HTML5")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  //ternary operator to say if value is a truthy value 
  // condition - express if True express if false 
  const handleClick = () => {
    // selectedBooks ? setSelectedBooks(false): setSelectedBooks(true);
    setSelectedBooks(current => !current);
    console.log("You clicked the book")
  }

  //Trying useEffect hook to toggle between on and off. book added and book removed 


  return (
    <div className="books-list">
      {books.map((book) => {
        return (
          <div
          style={{
            backgroundColor: selectedBooks ? 'salmon' : '',
            color: selectedBooks ? 'white' : '',
          }}
          onClick={handleClick}
        >          
          <div className="book">
          
            
            {/* <div className ="isSelected"> */}
            {/* <div onClick={() => setSelectedBooks(!selectedBooks)}> */}
           
           <div>
              <div className ="textRight">
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
              </div>
              </div>
              <div className= "bookLeft">
              
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="#" />
                
              </div>
              
            
            </div>
           
          </div>
         
          // </div>
         
        );
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
