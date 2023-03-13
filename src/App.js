import React from "react";
import Productlist from "./components/Productlist";
import SingleProduct from "./components/SingleProduct";
import "./style.css";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <Productlist />
        } />
        <Route path="product/:productid" element={<SingleProduct />} />

      </Routes>
    </>
  );
}
