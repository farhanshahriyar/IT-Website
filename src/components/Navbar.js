// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Hero from './components/Hero';
// import ProductList from './components/ProductList';
// import AboutUs from './components/AboutUs';
// import Footer from './components/Footer';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center">
//       <div className="text-white font-semibold text-xl">
//         Reven IT Store
//       </div>
//       <ul className="flex space-x-4">
//         <li className="text-white">Home</li>
//         <li className="text-white">Products</li>
//         <li className="text-white">About Us</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center">
      <div className="text-white font-semibold text-xl">
      <Link to="/" className="text-white">
      Reven IT Store
          </Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="text-white">
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
