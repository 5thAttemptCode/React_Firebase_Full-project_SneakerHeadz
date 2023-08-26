import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"


export default function App() {
  return (
    <Router>
      <nav>
        <div className="logo">
          <Link to="/">RETRO <br /> KICKZ</Link>
        </div>
        <div className="list">
          <Link className="link-btn" to="/shop">SHOP</Link>
          <Link className="link-btn" to="/women">WOMEN</Link>
          <Link className="link-btn" to="/men">MEN</Link>
        </div>
        <div className="user">
          <Link to="/cart">Cart</Link>
          <Link to="/login">User</Link>
        </div>
      </nav>
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
