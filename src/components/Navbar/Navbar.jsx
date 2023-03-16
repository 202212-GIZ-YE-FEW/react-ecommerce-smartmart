import {useEffect,useState} from 'react';
import TopCategories from './../HomePage/TopCategories';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
 
const Navbar = () => {
       const [category,setCategory]=useState('all')
       const [filtter,setFiltter]=useState(0)
       const[searchTerm,setSearchTerm]=useState("");
    return ( 
        <>
 
 <div id="flipkart-navbar">
    <div className="container">
        <div className="row row1">
            <ul className="largenav pull-right">
                <li className="upper-links"><a onClick={()=>setCategory('all')} className="links"  href="#">All Categories</a></li>
                <li className="upper-links"><a onClick={()=>setCategory('electronics')} className="links" href="#">electronics</a></li>
                <li className="upper-links"><a onClick={()=>setCategory('jewelery')} className="links" href="#">jewelery</a></li>
                <li className="upper-links"><a onClick={()=>setCategory('mens clothing')} className="links" href="#">mens clothing</a></li>
                <li className="upper-links"><a onClick={()=>setCategory('womens clothing')} className="links" href="#">womens clothing</a></li>
 
                <li className="upper-links">
                    <a className="links" href="#">
                        <svg className="" width="16px" height="12px"  >
                            <path d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z" fill="#fff"></path>
                        </svg>
                    </a>
                </li>
                <li className="upper-links dropdown"><a className="links" href="#">Filter</a>
                    <ul className="dropdown-menu">
                        <li className="profile-li"><a onClick={()=>setFiltter(1)} className="profile-links" href="#">Price High to Low</a></li>
                        <li className="profile-li"><a onClick={()=>setFiltter(2)} className="profile-links" href="#">Price low to High</a></li>
                        <li className="profile-li"><a onClick={()=>setFiltter(3)} className="profile-links" href="#">Name A to Z</a></li>
                        <li className="profile-li"><a onClick={()=>setFiltter(4)} className="profile-links" href="#">Name Z to A</a></li>
                        <li className="profile-li"><a onClick={()=>setFiltter(0)} className="profile-links" href="#">No Filter</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="row row2">
            <div className="col-sm-2">
                <h2  ><span className="smallnav menu" onclick="openNav()">☰ SmarMart</span></h2>
                <h1  ><span className="largenav">SmartMart</span></h1>
            </div>
            <div className="flipkart-navbar-search smallsearch col-sm-8 col-xs-11">
                <div className="row">
                    <input className="flipkart-navbar-input col-xs-11" type="text"
                     placeholder="Search for Products, Brands and more"  
                     onChange={(event)=>{
                         setSearchTerm(event.target.value);
                     }}/>
                    <button className="flipkart-navbar-button col-xs-1">
                        <svg width="15px" height="15px">
                            <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="cart largenav col-sm-2">
                <a className="cart-button">
                    <svg className="cart-svg " width="16 " height="16 " viewBox="0 0 16 16 ">
                        <path    ></path>
                    </svg> Cart
                    <span className="item-number ">0</span>
                </a>
            </div>
        </div>
    </div>
</div>
<div id="mySidenav" className="sidenav">
    <div className="container" >
        <span className="sidenav-heading">Home</span>
        <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
    </div>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
</div>
 
       <TopCategories   category={category} filtter={filtter}  /> 
       {/* <TopCategory filtter={filtter}/> */}

       </>
     );
}
 
export default Navbar;