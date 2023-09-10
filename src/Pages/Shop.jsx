import React, { useState, useEffect } from "react";
import { db } from "../firebase.config";
import { collection, getDocs, query } from 'firebase/firestore'
import './css/shop.css'
import MarqueeText from '../Components/Marquee';
import ProductContainer from '../Components/ProductContainer';


export default function Shop() {
  
  const [ shoes, setShoes ] = useState()
  const [ selectedShoeId, setSelectedShoeId ] = useState()


  useEffect(() => {
   const shoeRef = collection(db, "Sneaker")
   const q = query(shoeRef)
   
   getDocs(q)
     .then((querySnapshot) => {
       let shoes = []
       querySnapshot.docs.forEach((doc) => {
         shoes.push({ ...doc.data(), id: doc.id})
       })
       
       setShoes(shoes)
     })
     .catch(err => {
       console.log(err.message)
     })
  }, [])

  return (
    <div className='section shop'>
      <MarqueeText text="All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;" />
      <ProductContainer shoes={shoes} setSelectedShoeId={setSelectedShoeId} />
    </div>
  )
}
