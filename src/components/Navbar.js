import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center">
      <div className="text-white font-semibold text-xl">
        Reven IT Store
      </div>
      <ul className="flex space-x-4">
        <li className="text-white">Home</li>
        <li className="text-white">Products</li>
        <li className="text-white">About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
