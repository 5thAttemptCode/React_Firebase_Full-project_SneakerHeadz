import React from 'react'
import './women.css'

import MarqueeText from '../../Components/marquee/index'
import ProductContainer from '../../Components/productContainer/index'
import SliderText from '../../Components/sliderText/index'
import useSneaker from '../../Utils/useSneaker'


export default function Women() {

  const { sneaker, isLoading } = useSneaker()
  const womenShoes = sneaker.filter(shoe => shoe.type === "female")

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className='section women'>
      <MarqueeText text="Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;" />
      <div className="section-name">
        <SliderText text="WOMEN" />
      </div>
      <ProductContainer data={womenShoes} />
    </div>
  )
}
