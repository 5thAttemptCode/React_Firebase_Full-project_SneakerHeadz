
import './css/shop.css'
import { db } from "../firebase.config";
import { collection, getDocs, query } from 'firebase/firestore'
import { useState, useEffect } from "react";
import SkewDetails from '../Components/SkewDetails';
import BuyNow from '../Components/BuyNow';

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
