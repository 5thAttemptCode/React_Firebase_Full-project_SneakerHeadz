import { useState, useEffect } from "react";
import { db } from "../firebase.config";
import { collection, getDocs, query } from 'firebase/firestore'

import './css/shop.css'

import SkewDetails from '../Components/SkewDetails';
import BuyNow from '../Components/BuyNow';
import MarqueeText from '../Components/Marquee';



export default function Shop() {

  
  const [ shoes, setShoes ] = useState()

  useEffect(() => {
   const shoeRef = collection(db, "Sneaker")
   const q = query(shoeRef)
   
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
    <div className='section shop'>
      <MarqueeText text="All you SneakerHeadz be quiet, chose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, chose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, chose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, chose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, chose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;" />

      <div className="product-container">
          {shoes &&
            shoes.map((shoe) => (
              <div className="product-box" key={shoe.id}>
                <SkewDetails shoe={shoe} />
                <BuyNow />
                <img className="product-img" src={shoe.image} alt="HELLO" />
              </div>
          ))}
      </div>
    </div>
  )
}
