import {useEffect,useState} from 'react';
import TouchCarousel from 'react-touch-carousel';
import Carousel from 'react-bootstrap/Carousel';
import useFetch from './../useFetch/useFetch';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import TopCategory from './TopCategory';
 
const TopCategories = ({category}) => {
  
const [cat,setCat]=useState('all')
const [title,setTitle]=useState('category')

 if(category ==='all'){
   return(<> 
   <TopCategory  cat={'electronics'} title={'electronics'} />
   <TopCategory  cat={ 'jewelery' } title={'jewelery'}  />
   <TopCategory  cat={ 'men%27s%20clothing' } title={'mens clothing'}  />
   <TopCategory  cat={ 'women%27s%20clothing' } title={'womens clothing'}  /></>)
 }

 else if (category ==='electronics') {
  return ( <>  
    <h1>{category==='electronics'}</h1>
    <TopCategory cat={ 'electronics' } title={'electronics'}  />
    </>)}

else if (category ==='jewelery' ) {
  return ( <>  
    <h1>{category==='jewelery'}</h1>
    <TopCategory cat={ 'jewelery' } title={'jewelery'}  />

    
    </>)}

else if (category ==='mens clothing' ) {
  return ( <>  
    <h1>{category==='mens clothing'}</h1>
    <TopCategory  cat={ 'men%27s%20clothing' } title={'mens clothing'}  />
    
    </>)}

else if (category ==='womens clothing' ) {
  return ( <>  
    <h1>{category==='womens clothing'}</h1>
    <TopCategory  cat={ 'women%27s%20clothing' } title={'womens clothing'}  />
    
    </>)}

    }
  

 
 
    
       
 
export default TopCategories;
// jewelery