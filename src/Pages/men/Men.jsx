import React from 'react'
import './men.css'

import MarqueeText from '../../Components/marquee/index'
import ProductContainer from '../../Components/productContainer/index'
import SliderText from '../../Components/sliderText/index'
import useSneaker from '../../Utils/useSneaker'


export default function Men() {

  const { sneaker, isLoading } = useSneaker()
  const menShoes = sneaker.filter(shoe => shoe.type === "male")

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='section men'>
      <MarqueeText text="I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;" />
      <div className="section-name">
        <SliderText text="MEN" />
      </div>
      <ProductContainer data={menShoes} />
    </div>
  )
}
