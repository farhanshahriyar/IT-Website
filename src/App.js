import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <ProductList /> */}
      {/* <AboutUs /> */}
      <Footer />
    </div>
  );
}

export default App;
