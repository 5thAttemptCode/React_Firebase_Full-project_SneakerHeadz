import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/home/Home"
import Shop from "./Pages/shop/Shop"
import Men from "./Pages/men/Men"
import Women from "./Pages/women/Women"
import Cart from "./Pages/cart/Cart"
import Login from "./Pages/login/Login"
import Nav from "./Components/nav/Nav"
import ProductPage from './Components/productPage/ProductPage'
import Footer from './Components/footer/Footer'
import { AuthContextProvider } from './Context/AuthContext'
import SignUp from './Pages/login/SignUp'
import ProtectedRoute from './Components/ProtectedRoute'
import Account from './Pages/account/Account'
import LoggedInUser from './Components/loggedInUser/LoggedInUser'



export default function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Nav />
        <LoggedInUser />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shoes/:shoeId" element={<ProductPage />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </Router>
    </AuthContextProvider>

  )
}
