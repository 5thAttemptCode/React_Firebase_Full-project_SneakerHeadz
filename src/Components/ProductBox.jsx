// import SkewDetails from "./SkewDetails";
// import { Link } from "react-router-dom"
// import "./css/productBox.css"
// import { db } from "../firebase.config";
// import { collection, getDocs, query } from 'firebase/firestore'
// import { useState, useEffect } from "react";


// export default function ProductBox() {

//   // const [ shoes, setShoes ] = useState()

//   // useEffect(() => {
//   //  const shoeRef = collection(db, "Sneaker")
//   //  const q = query(shoeRef)
   
//   //  getDocs(q)
//   //    .then((querySnapshot) => {
//   //      let shoes = []
//   //      querySnapshot.docs.forEach((doc) => {
//   //        shoes.push({ ...doc.data(), id: doc.id})
//   //      })
//   //      // console.log(shoes)
//   //      setShoes(shoes)
//   //    })
//   //    .catch(err => {
//   //      console.log(err.message)
//   //    })
//   // }, [])

//   return (
//     <div className="product-box">
//       {shoes &&
//             shoes.map((shoe) => (
//                 <SkewDetails key={shoe.id} shoe={shoe} />
//             ))}


//       {/* <SkewDetails />
//       <div className="btn-box">
//         <Link className="link-btn" to="/shop">Buy Now</Link>
//       </div> */}
//     </div>
//   )
// }
