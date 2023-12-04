import React, { useContext } from 'react'
import './style.css'
import MarqueeText from '../../Components/marquee/index'
import ProductContainer from '../../Components/productContainer/index'
import SliderText from '../../Components/sliderText/index'
import useSneaker from '../../Utils/useSneaker'
import SearchBar from '../../Components/searchBar'
import { ShopContext } from '../../Context/ShopContext'


export default function Women() {

  const { searchTerm, setSearchTerm } = useContext(ShopContext);
  const { sneaker, isLoading } = useSneaker()

  const womenShoes = isLoading || !sneaker 
  ? [] 
  : sneaker.filter(shoe => shoe.type === "female" && shoe.name.toLowerCase().startsWith(searchTerm.toLowerCase()))

  return (
    
    <div className='section women'>
      <MarqueeText text="Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;Baby baby baby, can't you see? Sometimes your fresh Kickz just hypnotize me.&nbsp;&nbsp;-&nbsp;&nbsp;" />
      <div className="section-intro-search">
        <SliderText text="LADIES" />
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <ProductContainer data={womenShoes} />
    </div>
  )
}
