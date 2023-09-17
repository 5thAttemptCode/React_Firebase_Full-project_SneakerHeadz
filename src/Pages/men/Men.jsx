import React, { useState, useEffect } from 'react'
import { db } from "../../firebase.config";
import { collection, getDocs, where, query } from 'firebase/firestore'
import './men.css'
import MarqueeText from '../../Components/marquee/Marquee';
import ProductContainer from '../../Components/productContainer/ProductContainer';
import SliderText from "../../Components/sliderText/SliderText";


export default function Men() {

  const [ shoes, setShoes ] = useState()

  useEffect(() => {
   const shoeRef = collection(db, "Sneaker")
   const q = query(shoeRef, where("type", "==", "male"))
   
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
    <div className='section men'>
      <MarqueeText text="I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;" />
      <div className="section-name">
        <SliderText text="MEN" />
      </div>
      <ProductContainer shoes={shoes} />
    </div>
  )
}
