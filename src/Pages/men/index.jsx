import React, { useContext } from 'react'
import './style.css'
import MarqueeText from '../../Components/marquee/index'
import ProductContainer from '../../Components/productContainer/index'
import SliderText from '../../Components/sliderText/index'
import useSneaker from '../../Utils/useSneaker'
import SearchBar from '../../Components/searchBar'
import { ShopContext } from '../../Context/ShopContext'


export default function Men() {
  const { searchTerm, setSearchTerm } = useContext(ShopContext);
  const { sneaker, isLoading } = useSneaker()

  const menShoes = isLoading || !sneaker 
  ? [] 
  : sneaker.filter(shoe => shoe.type === "male" && shoe.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
  
  return (
    <div className='section men'>
      <MarqueeText text="I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;I got 99 Problems but fresh Kickz ain't one.&nbsp;&nbsp;-&nbsp;&nbsp;" />
      <div className="section-intro-search">
        <SliderText text="MEN" />
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <ProductContainer data={menShoes} />
    </div>
  )
}
