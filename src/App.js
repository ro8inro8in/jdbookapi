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



function App() {
  
  const [count, setCount] = useState(JSON.parse(window.sessionStorage.getItem("count")) || 1);
  useEffect(() => {

     setCount(JSON.parse(window.sessionStorage.getItem("count")));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("count", count);
  }, [count]);
  
  return (
    <div className="App"> 
     
   <Header />
      <Navbar />
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
