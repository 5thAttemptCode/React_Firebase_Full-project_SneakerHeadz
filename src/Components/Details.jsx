// import React from 'react'
// import { Link } from 'react-router-dom'
// import "./css/buyNow.css"

// export default function Details({ shoe }) {
//   return (
//     <div className='btn-box'>
//       <Link shoe={shoe} className="buy-now" to="/product-page">Details</Link>
//     </div>
//   )
// }

import React from "react";
import { Link } from "react-router-dom";
import "./css/buyNow.css";
import ProductPage from "./ProductPage";

export default function Details({ shoe }) {
  return (
    <div className="btn-box">
      <Link shoe={shoe} className="buy-now" to={shoe.id} element={<ProductPage />}>
        Details
      </Link>
    </div>
  );
}