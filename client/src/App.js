import "./App.css";
import React from "react";
import Customers from "./components/customers/customers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // the Routes component will wrap each individual route component
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Customers />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
