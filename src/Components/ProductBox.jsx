import React from "react";
import "./css/productBox.css";
import SkewDetails from "../Components/SkewDetails";
import BuyNow from "../Components/BuyNow";


export default function ProductBox ({ shoe }) {
  return (
    <div className="product-box">
      <SkewDetails shoe={shoe} />
      <BuyNow />
      <img className="product-img" src={shoe.image} alt="HELLO" />
    </div>
  );
};
