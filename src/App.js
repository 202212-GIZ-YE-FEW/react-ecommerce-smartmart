import React from "react";
import Productlist from "./components/Productlist";
// import SingleProduct from "./components/SingleProduct";
import "./style.css";
import SingleProduct from './components/SingleProduct/SingleProduct';
import { Routes, Route } from "react-router-dom";
import Herosection from'./components//HomePage/Herosection'
import TopCategories from './components/HomePage/TopCategories'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/HomePage/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function App() {
  return (
    <>
  
     
     
      <Routes>
        <Route path="/" element={
            <Navbar/>  
          } />
          <Route path="/products" element={
            <Productlist />
          } />
          <Route path="product/:productid" element={<SingleProduct />} />

      </Routes>
    </>
  );
}
