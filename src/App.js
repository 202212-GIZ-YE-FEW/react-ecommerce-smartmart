import React from "react";
import Productlist from "./components/Productlist";
// import SingleProduct from "./components/SingleProduct";
import "./style.css";
<<<<<<< HEAD
=======
import SingleProduct from './components/SingleProduct/SingleProduct';
>>>>>>> SP
import { Routes, Route } from "react-router-dom";
import Herosection from'./components//HomePage/Herosection'
import TopCategories from './components/HomePage/TopCategories'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/HomePage/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <>
    <h1>sad</h1>
      <Navbar/>  
     
      {/* <Routes>
        <Route path="/" element={
          <Productlist />
        } />
        <Route path="product/:productid" element={<SingleProduct />} />

      </Routes> */}
    </>
  );
}
