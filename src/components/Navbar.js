import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = React.useContext(CartContext)

  return (
    <nav className="bg-gray-800 py-4 px-6 flex flex-wrap items-center justify-between">
      <div className="text-white font-semibold text-xl">
        <Link to="/" className="text-white">
          Reven IT Store
        </Link>
      </div>
      <button
        className="text-white lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="bx bx-menu" style={{ fontSize: '1.5rem' }}></i>
      </button>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full lg:flex lg:items-center lg:w-auto space-y-2 lg:space-y-0 lg:space-x-4`}
      >
        <li>
          <Link to="/" className="text-white block py-2 px-4">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="text-white block py-2 px-2">
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white block py-2 px-2">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white block py-2 px-2">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/cart" className="text-white block py-2 px-2">
          <div className='relative inline-block'> 
          <i
            className="bx bx-cart text-white block py-2 px-2"
            style={{ fontSize: '1.5rem' }}
          >
          </i>
          <span className='absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center p-1'>{cart.reduce((a,b)=>a+b.count, 0)}</span>
          </div>
          </Link>
        </li>
        <li>
          <i
            className="bx bx-log-in text-white block py-2 px-2"
            style={{ fontSize: '1.5rem' }}
          ></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
