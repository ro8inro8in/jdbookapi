import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Books from "./components/BooksList";
import Magazines from "./components/Magazines";
import EBooks from "./components/EBooks";
import Account from "./components/Account";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Lorem from "./components/Lorem";

//Added the store to sessionStorage in the parent component, Originally I had this in the BooksIsSelected child component but
//This did not work, my thought were that it would keep refreshing the object and setting it back every time the component renders
//By passing this in at the Parent level I manged to avoid this and store the state to sessionStorage this let me save and reload the page and kept my
//click information by passing in to used state if JSON.parse... if nothing is stored just pass an integer of 1, Ideally I would like to pass this to the book object in
// BooksIsSelected 

function App() {
  
  const [count, setCount] = useState(JSON.parse(window.sessionStorage.getItem("count")) || 1);
  useEffect(() => {

     setCount(JSON.parse(window.sessionStorage.getItem("count")));
  }, []);
//gets the key value pair after it has been set 
  useEffect(() => {
    window.sessionStorage.setItem("count", count);
  }, [count]);
  //sets a key value pair 
  return (
    <div className="App"> 
     
   <Header />
      <Navbar />
      <Lorem />
      <Routes> 
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Books count={count} setCount={setCount} />} />
        <Route path="/Magazines" element={<Magazines />} />
        <Route path="/EBooks" element={<EBooks />} />
        <Route path="/Account" element={<Account />} />
      </Routes> 
      <Footer /> 
    </div>
  );
}

export default App;
