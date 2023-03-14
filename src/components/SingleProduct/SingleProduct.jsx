import React from "react";
import "./SingleProduct.css";
import img1 from '../../assets/img/1.jpg';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";


export default function SingleProduct() {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 bg-light">
                                <div className="images p-3">
                                    <div className="text-center p-4"> 
                                        <img id="main-image" src={img1} width="350"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="product p-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <FaLongArrowAltLeft className="icon"/>
                                            <span className="mx-4">Back</span> 
                                        </div> 
                                        <FaShoppingBag className="icon"/>
                                    </div>
                                    <div className="mt-4 mb-3"> 
                                        <span className="text-uppercase text-muted brand">Orianz</span>
                                        <h5 className="text-uppercase">Men's slim fit t-shirt</h5>
                                        <div className="price d-flex flex-row align-items-center"> 
                                            <span className="act-price">$20</span>
                                        </div>
                                    </div>
                                    <p className="about">Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeans or trousers complete the look.</p>
                            
                                    <div className="cart d-flex justify-content-around mt-4 align-items-center">
                                        <input type="number" className=" quantity" placeholder="1" min="1" step="1"></input>
                                        <button className="btn btn-add w-100">Add to cart</button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}
