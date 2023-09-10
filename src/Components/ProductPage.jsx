// import React from 'react'
// import { useNavigate } from "react-router-dom";



// export default function ProductPage() {

//   let navigate = useNavigate()

//   return (
//     <div className="section product-page">
//       <button className='back' onClick={() => navigate(-1)}>BACK</button>
//     </div>
//   )
// }

import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { db } from "../firebase.config";
import { doc, getDoc } from "firebase/firestore";

export default function ProductPage(props) {
  const { shoeId } = useParams();
  // const [shoe, setShoe] = useState();

  // useEffect(() => {
  //   const shoeRef = doc(db, "Sneaker", shoeId);

  //   getDoc(shoeRef)
  //     .then((doc) => {
  //       setShoe(doc.data());
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [shoeId]);

  return (
    <div className="product-page">
      <h1>{shoe.name}</h1>
      <img src={shoe.image} alt={shoe?.name} />
      <p>Price: ${shoe.price}</p>
      <p>{shoeId}</p>
      <button>Add to cart</button>
      <button className='back' onClick={() => navigate(-1)}>BACK</button>
      <Outlet />
    </div>
  );
}