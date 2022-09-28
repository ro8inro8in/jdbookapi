import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Books from "./components/BooksList";
import Magazines from "./components/Magazines";
import EBooks from "./components/EBooks";
import Account from "./components/Account";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Magazines" element={<Magazines />} />
        <Route path="/EBooks" element={<EBooks />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
