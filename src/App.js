import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ProductInfo from './components/ProductInfo';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      {/* <ProductList /> */}
      {/* <AboutUs /> */}
      <ProductInfo/>
      <Footer />
    </div>
  );
}

export default App;
