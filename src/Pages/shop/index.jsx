import React, { useContext } from "react";
import './style.css'
import MarqueeText from '../../Components/marquee/index'
import ProductContainer from '../../Components/productContainer/index'
import SliderText from '../../Components/sliderText/index'
import useSneaker from "../../Utils/useSneaker";
import { ShopContext } from "../../Context/ShopContext";
import SearchBar from "../../Components/searchBar";


export default function Shop() {
  
  const { searchTerm, setSearchTerm } = useContext(ShopContext);
  const { sneaker, isLoading } = useSneaker()

  const searchSneaker = searchTerm ? 
    sneaker.filter(shoe => shoe.name.toLowerCase().startsWith(searchTerm.toLowerCase())) 
    : sneaker

  if (isLoading) {
    return <div>Loading...</div>
  }
   
  return (
    <div className='section shop'>
      <MarqueeText text="All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;All you SneakerHeadz be quiet, choose a pair and buy it!&nbsp;&nbsp;-&nbsp;&nbsp;" />
      <div className="section-intro-search">
        <SliderText text="SHOP" />
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <ProductContainer data={searchSneaker} />
    </div>
  )
}
