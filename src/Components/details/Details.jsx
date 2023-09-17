import React from "react";
import { Link } from "react-router-dom";
import "../buyNow/buyNow.css";
import ProductPage from "../productPage/ProductPage";


export default function Details({ shoe }) {
  return (
    <div className="btn-box">
      <Link className="buy-now" to={`/shoes/${shoe.id}`} state={{ shoe }} element={<ProductPage />}>
        Details
      </Link>
    </div>
  );
}

