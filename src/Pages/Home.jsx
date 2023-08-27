import SliderContainer from "../Components/SliderContainer"
import Collage from "../Components/Collage"
import MarqueeText from "../Components/Marquee"
import CollageTwo from "../Components/CollageTwo"
import "./css/home.css"


export default function Home() {

  return (
    <div className='section home'>
      <SliderContainer />
      <MarqueeText text="RETRO KICKS - RETRO KICKS -" />
      <Collage />
      <MarqueeText text="Sneaker Goals - Sneaker Goals -" />
      <CollageTwo />
    </div>
  )
}
