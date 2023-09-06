import React from "react";
import "./css/productBox.css";
import SkewDetails from "../Components/SkewDetails";
import Details from "./Details";


export default function ProductBox ({ shoe }) {
  return (
    <div className="product-box">
      <SkewDetails shoe={shoe} />
      <Details shoe={shoe}/>
      <img className="product-img" src={shoe.image} alt="HELLO" />
    </div>
  );
};

