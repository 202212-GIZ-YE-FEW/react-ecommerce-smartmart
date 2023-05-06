import React from "react";
import "./SingleProduct.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { useEffect , useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SingleProduct() {
    const params  = useParams();
    const api_link = "https://fakestoreapi.com/products"
    const [product, setproduct] = useState([]);
    useEffect(()=>{
        fetch(`${api_link}/${params.productid}`)
        .then((res) => res.json())
        .then((date) => setproduct(date))
    },[]);

    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 bg-light">
                                <div className="images p-3">
                                    <div className="text-center p-4"> 
                                        <img id="main-image" src={product.image} width="350"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="product p-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <Link to={`/products`} className="text-reset">
                                                <FaLongArrowAltLeft className="icon"/>
                                            </Link>
                                        </div> 
                                        <FaShoppingBag className="icon"/>
                                    </div>
                                    <div className="mt-4 mb-3"> 
                                        <span className="text-uppercase text-muted brand my-5">{product.category}</span>
                                        <h5 className="text-uppercase my-5">{product.title}</h5>
                                        <div className="price d-flex flex-row align-items-center"> 
                                            <span className="act-price">{product.price}$</span>
                                        </div>
                                    </div>
                                    <p className="about">{product.description}</p>
                            
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
