import React from "react";
import './shop.css'

import MarqueeText from '../../Components/marquee/index'
import ProductContainer from '../../Components/productContainer/index'
import SliderText from '../../Components/sliderText/index'
import useSneaker from "../../Utils/useSneaker";


export default function Shop() {
  
  const { sneaker, isLoading } = useSneaker()

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className='section shop'>
      <MarqueeText text="All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;" />
      <div className="section-name">
        <SliderText text="SHOP" />
      </div>
      <ProductContainer data={sneaker} />
    </div>
  )
}
