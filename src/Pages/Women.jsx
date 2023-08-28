import { useState, useEffect } from 'react'
import { db } from "../firebase.config";
import { collection, getDocs, where, query } from 'firebase/firestore'

import SkewDetails from '../Components/SkewDetails';
import BuyNow from '../Components/BuyNow';

import './css/women.css'
import ProductBox from '../Components/ProductBox';



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
      <div className="product-container">
          {shoes &&
            shoes.map((shoe) => (
            <div className="product-box" key={shoe.id}>
                <SkewDetails shoe={shoe} />
                <BuyNow />
                <img src={shoe.image} alt="HELLO" />
            </div>
          ))}
      </div>
    </div>
  )
}
