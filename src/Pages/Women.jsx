import React, { useState, useEffect } from 'react'
import { db } from "../firebase.config";
import { collection, getDocs, where, query } from 'firebase/firestore'
import './css/women.css'
import MarqueeText from '../Components/Marquee';
import ProductContainer from '../Components/ProductContainer';
import SliderText from '../Components/SliderText';


export default function Women() {

  const [ shoes, setShoes ] = useState()

  useEffect(() => {
   const shoeRef = collection(db, "Sneaker")
   const q = query(shoeRef, where("type", "==", "female"))
   
   getDocs(q)
     .then((querySnapshot) => {
       let shoes = []
       querySnapshot.docs.forEach((doc) => {
         shoes.push({ ...doc.data(), id: doc.id})
       })
       // console.log(shoes)
       setShoes(shoes)
     })
     .catch(err => {
       console.log(err.message)
     })
  }, [])

  return (
    
    <div className='section women'>
      <MarqueeText text="Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;" />
      <div className="section-name">
        <SliderText text="WOMEN" />
      </div>
      <ProductContainer shoes={shoes} />
    </div>
  )
}
