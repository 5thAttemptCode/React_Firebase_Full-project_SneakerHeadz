import React from "react"
import './productBox.css'

import SkewDetails from "../skewDetails"
import Details from "../details/index"


export default function ProductBox({ data }) {

  return (
    <div className="product-box">
      <SkewDetails data={data} />
      <Details data={data}/>
      <img src={data.image} />
    </div>
  );
};

