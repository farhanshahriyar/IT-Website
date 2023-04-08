import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ProductInfo from './components/ProductInfo';
import Contact from './components/Contact';

export const CartContext = React.createContext()
function App() {
  const [cart , setCart] = React.useState([])
  useEffect(() => {
    const cart = localStorage.getItem('cart') || '[]'
      setCart(JSON.parse(cart))
  }, [])

  return (
    <CartContext.Provider value={{cart, setCart}}>
    <div className="App">
      {/* Router starts here */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </CartContext.Provider>
  );
}

export default App;
