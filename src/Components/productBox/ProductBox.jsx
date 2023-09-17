import React from "react";
import "./productBox.css";
import SkewDetails from "../skewDetails/SkewDetails";
import Details from "../details/Details";


export default function ProductBox ({ shoe }) {
  return (
    <div className="product-box">
      <SkewDetails shoe={shoe} />
      <Details shoe={shoe}/>
      <img className="product-img" src={shoe.image} alt="HELLO" />
    </div>
  );
};

