// import React from 'react';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import ProductList from './components/ProductList';
// import AboutUs from './components/AboutUs';
// import Footer from './components/Footer';
// import ProductInfo from './components/ProductInfo';


// function App() {
//   return (
//     <div className="App">
     
//     {/* Router starts here */}


//     <Router>
//       <Navbar />
//       {/* <Switch>
//         <Route exact path="/">
//           <Hero />
//         </Route>
//         <Route path="/products" children={<ProductList />}></Route>
//         <Route path="/about" children={<AboutUs />}></Route>
//         <Route path="/product/:id" children={<ProductInfo />}></Route>
//       </Switch> */}
//       <Route exact path="/" element={<Hero/>}/>
//       <Route path="/about" element={<AboutUs/>}/>
//       <Route path="/product/:id" element={<ProductInfo />}/>
//       <Route path="/products" element={<ProductList />}/>
//       <Footer />
//     </Router>

//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <div className="App">
      {/* Router starts here */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product/:id" element={<ProductInfo />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
