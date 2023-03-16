import {useEffect,useState} from 'react';
import TopCategory from './TopCategory';
 
const TopCategories = ({category,filtter}) => {
  
const [cat,setCat]=useState('all')
const [title,setTitle]=useState('category')
const filttere=filtter;
 
 

  
   if(category ==='all' ){
   return(<> 
   <TopCategory  cat={'electronics'} title={'electronics'} filttere={filttere}  />
   <TopCategory  cat={ 'jewelery' } title={'jewelery'} filttere={filttere}   />
   <TopCategory  cat={ 'men%27s%20clothing' } title={'mens clothing'} filttere={filttere}    />
   <TopCategory  cat={ 'women%27s%20clothing' } title={'womens clothing'} filttere={filttere}    /></>)
 }



 else if (category ==='electronics' ) {
  return ( <>  
    <h1>{category==='electronics'}</h1>
    <TopCategory cat={ 'electronics' } title={'electronics'} filttere={filttere}    />
    </>)}

else if (category ==='jewelery'   ) {
  return ( <>  
    <h1>{category==='jewelery'}</h1>
    <TopCategory cat={ 'jewelery' } title={'jewelery'}  filttere={filttere}  />

    
    </>)}

else if (category ==='mens clothing'   ) {
  return ( <>  
    <h1>{category==='mens clothing'}</h1>
    <TopCategory  cat={ 'men%27s%20clothing' } title={'mens clothing'} filttere={filttere}   />
    
    </>)}

else if (category ==='womens clothing'    ) {
  return ( <>  
    <h1>{category==='womens clothing'}</h1>
    <TopCategory  cat={ 'women%27s%20clothing' } title={'womens clothing'} filttere={filttere}   />
    

    
    </>)}

    


    }

export default TopCategories;
// jewelery