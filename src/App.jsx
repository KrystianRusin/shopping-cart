import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="w-full p-0 m-0 font-plex-mono flex flex-col justify-between min-h-screen">
        <Navbar />
        <div className="min-h-screen flex flex-col justify-start p-12">
          <Routes>
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
