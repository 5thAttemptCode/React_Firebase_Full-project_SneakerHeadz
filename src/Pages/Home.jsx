import SliderContainer from "../Components/SliderContainer"
import Collage from "../Components/Collage"
import MarqueeText from "../Components/Marquee"
import "./css/home.css"


export default function Home() {

  return (
    <div className='section home'>
      <MarqueeText text="SO FRESH AND SO CLEAN&nbsp;&nbsp;-&nbsp;&nbsp;SO FRESH AND SO CLEAN&nbsp;&nbsp;-&nbsp;&nbsp;SO FRESH AND SO CLEAN&nbsp;&nbsp;-&nbsp;&nbsp;SO FRESH AND SO CLEAN&nbsp;&nbsp;-&nbsp;&nbsp;SO FRESH AND SO CLEAN&nbsp;&nbsp;-&nbsp;&nbsp;SO FRESH AND SO CLEAN&nbsp;&nbsp;-&nbsp;&nbsp;" />
      <SliderContainer />
      <MarqueeText text="Sneaker Goals - Sneaker Goals - Sneaker Goals - Sneaker Goals - Sneaker Goals - Sneaker Goals - Sneaker Goals - Sneaker Goals - Sneaker Goals - Sneaker Goals - Sneaker Goals - Sneaker Goals - " />
      <Collage />
    </div>
  )
}
