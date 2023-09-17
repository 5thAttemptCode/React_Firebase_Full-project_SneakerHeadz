import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/home/Home"
import Shop from "./Pages/shop/Shop"
import Men from "./Pages/men/Men"
import Women from "./Pages/women/Women"
import Cart from "./Pages/cart/Cart"
import Login from "./Pages/login/Login"
import Nav from "./Components/nav/Nav"
import ShopContextProvider from './Context/ShopContext'
import ProductPage from './Components/productPage/ProductPage'
import Footer from './Components/footer/Footer'



export default function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shoes/:shoeId" element={<ProductPage />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </ShopContextProvider>
  )
}
