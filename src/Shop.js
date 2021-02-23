import React,{useState,useEffect} from 'react';

import './App.css';
function Shop() {
    useEffect(()=>{
        fetchItems();
    } );
  
 // const [items,setItems] = useState([]);
    const fetchItems=async()=>{
        const data= await fetch('http://skunkworks.ignitesol.com:8000/books/');
        const items=await data.json();
        // console.log(items.data.lastUpdate);
        // setItems(items.data.lastUpdate);
    }
  return (
    <div  >
      {

        // items.map(item1 =>{
         
        //     <h1>{item1.data.lastUpdate}</h1>
        //   })
      }
      shop
    </div>
  );
}

export default Shop;
