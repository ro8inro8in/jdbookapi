import React, { useState} from "react";
import "../App";

//using BookIsSelected prop to choose individual book, 
// useState is used for the operation of the truthy or falsey value for on or off
// handleClick Function is an operation that is performed from the state. current state is false => if
//current state is not false then change colour, colour state is now true
//To show book is selected I chose to do this with CSS inline style when book selected change
//colour when clicked again revert to original colour, I did want to store this in a shopping
//basket but felt it was not the best way to fit the brief with the time given although given
//more time this would be a common user case and i intend to add this functionality in the future
//line 55 is where i decided to use the split method each description at the end of the first sentence either
//on a full stop or explanation mark

const BookIsSelected = (props) => {

  
  const [isSelected, setIsSelected] = useState(false);
//state used to pass to the click function for books card
  const { book, setCount,count } = props;
  //Passed in props from App js to handle the saved state, while did not manage to save the state of the object I have manged to save the state that shows in session storage the amount of clicks and when refreshed it remembers this state 
  const handleClick = () => {
    setIsSelected((current) => !current);
    setCount(count + 1)
    console.log("You clicked the book");
  };
//function that is true or false if clicked state is true and state is updated 

return (
  
    <div
      className="book"
      style={{
        backgroundColor: isSelected ? "salmon" : "",
        color: isSelected ? "white" : "",
      }}
//This inline style toggles between colours to show what items have been clicked    
      onClick={handleClick}
      
    >
  
      <div>
        <div className="textRight">
          <div>
            <h3>Title: {book.volumeInfo.title}</h3>
          </div>
          <div>
            <h4>Author: {book.volumeInfo.authors}</h4>
          </div>
          <div>
            <h5>Pages: {book.volumeInfo.pageCount}</h5>
          </div>
          <div className="long-text">
            <p>
              Description: ({book.volumeInfo.description.split(". " || "! ")[0]}
              )...  
            </p>
            
          </div>
        </div>
      </div>

      <div className="bookLeft">
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="#" />
      </div>
    </div>
    
  );
};

export default BookIsSelected;
