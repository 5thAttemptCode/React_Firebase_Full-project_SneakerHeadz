import React from 'react'
import "./home.css"

import Collage from '../../Components/collage/index'
import MarqueeText from '../../Components/marquee/index'
import SliderContainer from '../../Components/slider/index'
import Subscribe from '../../Components/subscribe/index'


export default function Home() {
  
  return (
    <div className='section home'>
      <MarqueeText text="SO FRESH AND SO CLEAN!&nbsp;&nbsp;-&nbsp;&nbsp;SO FRESH AND SO CLEAN!&nbsp;&nbsp;-&nbsp;&nbsp;SO FRESH AND SO CLEAN!&nbsp;&nbsp;-&nbsp;&nbsp;SO FRESH AND SO CLEAN!&nbsp;&nbsp;-&nbsp;&nbsp;SO FRESH AND SO CLEAN!&nbsp;&nbsp;-&nbsp;&nbsp;SO FRESH AND SO CLEAN!&nbsp;&nbsp;-&nbsp;&nbsp;" />
      <SliderContainer />
      <MarqueeText text="K.R.E.A.M Kickz Rule Everything Around Me.&nbsp;&nbsp;-&nbsp;&nbsp;K.R.E.A.M Kickz Rule Everything Around Me.&nbsp;&nbsp;-&nbsp;&nbsp;K.R.E.A.M Kickz Rule Everything Around Me.&nbsp;&nbsp;-&nbsp;&nbsp;K.R.E.A.M Kickz Rule Everything Around Me.&nbsp;&nbsp;-&nbsp;&nbsp;K.R.E.A.M Kickz Rule Everything Around Me.&nbsp;&nbsp;-&nbsp;&nbsp;" />
      <Collage />
      <MarqueeText text="I'm sorry Ms. Jackson, but my Kickz are for real.&nbsp;&nbsp;-&nbsp;&nbsp;I'm sorry Ms. Jackson, but my Kickz are for real.&nbsp;&nbsp;-&nbsp;&nbsp;I'm sorry Ms. Jackson, but my Kickz are for real.&nbsp;&nbsp;-&nbsp;&nbsp;I'm sorry Ms. Jackson, but my Kickz are for real.&nbsp;&nbsp;-&nbsp;&nbsp;I'm sorry Ms. Jackson, but my Kickz are for real.&nbsp;&nbsp;-&nbsp;&nbsp;" />
      <Subscribe />
    </div>
  )
}
