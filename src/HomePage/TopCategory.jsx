import {useEffect,useState} from 'react';
import TouchCarousel from 'react-touch-carousel';
import Carousel from 'react-bootstrap/Carousel';
import useFetch from './../useFetch/useFetch';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
// 
const TopCategory= ({cat ,title,filtter }) => {
    const [products] =useFetch(`https://fakestoreapi.com/products/category/${cat}`,filtter);
        //👇️ sort by Numeric property ASCENDING (1 - 100)
        const numAscending  = [...products].sort((a, b) => a.price - b.price);
        // 👇️ sort by Numeric property DESCENDING (100 - 1)
        const numDescending = [...products].sort((a, b) => b.price - a.price);
         // 👇️ sort by String property ASCENDING (A - Z)
        const strAscending = [...products].sort((a, b) =>a.title > b.title ? 1 : -1,);
         // 👇️ sort by String property DESCENDING (Z - A)
        const strDescending = [...products].sort((a, b) =>a.title > b.title ? -1 : 1,);
    
   
 return ( <>

   <h1>{title}</h1>
   <h2>{filtter}</h2>
   <CardGroup>
   { products.map((product )=>( 
      <div className="dd" key={product.id}>
<Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.Title}</Card.Title>
          <Card.Text>
           {product.price} $
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <h2>{product.title}</h2>
        </Card.Footer>
  </Card>   
 </div>
)).slice(0,  4)}
</CardGroup> 

      </>
     );
       }
 
export default TopCategory;