import './css/men.css'
import React, { useState, useEffect } from 'react'
import { db } from "../firebase.config";
import { collection, getDocs, where, query } from 'firebase/firestore'
import SkewDetails from '../Components/SkewDetails';
import BuyNow from '../Components/BuyNow';




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
       // console.log(shoes)
       setShoes(shoes)
     })
     .catch(err => {
       console.log(err.message)
     })
  }, [])


  return (
    <div className='section men'>
     <div className="product-container">
          {shoes &&
            shoes.map((shoe) => (
              <div className="product-box">
                <SkewDetails key={shoe.id} shoe={shoe} />
                <BuyNow />
              </div>
          ))}
          

      </div>
    </div>
  )
}
