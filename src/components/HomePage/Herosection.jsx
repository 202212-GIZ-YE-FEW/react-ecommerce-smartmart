 
import   {useEffect,useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './1.jpeg';
import img2 from './2.png';
import img3 from './3.png';


const Herosection = () => {

   return (
       <div className="carousel h-50">
       <Carousel >
         <Carousel.Item>
           <img
             className="image-carousel  w-100 "
             src={img1}
             alt="First slide"
           />
           <Carousel.Caption>
             <h3>Black Friday</h3>
             <p>great deal for Friday.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>

           <img
             className="image-carousel  w-100"
             src={img2}
             alt=""
           />
   
           <Carousel.Caption>
             <h3>lexuary Jewelery</h3>
             <p>lexuary Jewelery only in Smartmart.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img 
             className=" image-carousel w-100"
             src={img3}
             alt="Third slide"
           />
   
           <Carousel.Caption>
             <h3>Headphones from apple</h3>
             <p>
               what a great black headphone .
             </p>
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
       </div>
     );
}

export default Herosection;