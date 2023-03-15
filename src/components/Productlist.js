import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
function Productlist() {
    const [product, setproduct] = useState([]); /// This is temporary and will be deleted so that the value is sent from the navbar as props without creating a search button in this container
    const [search, setSearch] = useState("");


    //This function works with data fetch and stores it inside the project
    const getproduct = () => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((date) => setproduct(date));
    }
    useEffect(() => {
        //We made a call function that operates Fitch Data here
        getproduct();
    }, []);
    console.log(product);
    return (
        <>
            <div className="container">
                <div>Productlist</div>
                <input type="search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <div className="row">
                    {
                        product.filter((items) => { //Use the filter to compare the value of the input (will take the value as props from navbar component), so that if it is empty, it displays all the data, and if any character changes, it displays the data that includes this character
                            if (search == "") {
                                return items;
                            }
                            else if (items.title.toLowerCase().includes(search.toLowerCase())) {
                                return items;
                            }
                        })
                            .map((items) => { //We used the map to display the data
                                // We used the link to connect the product to the React Reuters
                                return (
                                    <div className="col-lg-4 col-md-12 mb-4">
                                        <div className="card">
                                            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                                data-mdb-ripple-color="light">
                                                <img src={items.image} alt={items.title}
                                                    className="w-100    image" />
                                                <div className="hover-overlay">
                                                    <div className="mask"></div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <Link to={`/product/${product.id}`} className="text-reset">
                                                    <h5 className="card-title mb-3">{items.title}</h5>
                                                </Link>

                                                <p className="text-reset">{items.category}</p>

                                                <h6 className="mb-3">${items.price}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </>
    )
}

export default Productlist