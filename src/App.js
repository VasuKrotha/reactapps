import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import About from "./About";
import Contact from "./Contact";
import Displaypro from "./Displaypro";
import Bill from "./Bill";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="displaypro" element={<Displaypro />} />
        <Route path="bill" element={<Bill />} />
      </Routes>
    </div>
  );
}

export default App;
