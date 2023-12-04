import React from 'react'
import { AuthContextProvider } from './Context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ShopContextProvider } from './Context/ShopContext'
import ProtectedRoute from './Utils/ProtectedRoute'
import ScrollToTop from './Utils/ScrollToTop'
import Account from './Pages/account/index'
import Cart from './Pages/cart/index'
import Home from './Pages/home/index'
import LoggedInUser from './Components/loggedInUser/index'
import Login from './Pages/login/Login'
import Men from './Pages/men/index'
import Shop from './Pages/shop/index'
import SignUp from './Pages/login/SignUp'
import Women from './Pages/women/index'
import Footer from './Components/footer/index'
import Nav from './Components/nav/index'
import ProductPage from './Components/productPage/index'
import useViewportheight from './Utils/useViewPortheight'


export default function App() {
  
  useViewportheight()
  
  return (
    <ShopContextProvider>
      <AuthContextProvider>
        <Router>
          <ScrollToTop />
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
    </ShopContextProvider>
  )
}
