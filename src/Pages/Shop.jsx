
import './css/Pages.css'
import { db } from "../firebase.config";
import { collection, getDocs, query } from 'firebase/firestore'
import { useState, useEffect } from "react";
import SkewDetails from '../Components/SkewDetails';
import { Link } from 'react-router-dom';

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
                <div className="btn-box">
                  <Link className="link-btn" to="/shop">Buy Now</Link>
                </div>
              </div>
          ))}
      </div>
    </div>
  )
}
