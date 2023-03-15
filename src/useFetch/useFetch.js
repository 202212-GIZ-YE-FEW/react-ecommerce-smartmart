import {useEffect,useState} from 'react';
const useFetch=(url,filtter)=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(data=>setData(data))
            
    },[url,filtter])
    return [data]
}
export default useFetch