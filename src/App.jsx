import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import Nav from "./Components/Nav"


export default function App() {
  return (
    <Router>
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}
