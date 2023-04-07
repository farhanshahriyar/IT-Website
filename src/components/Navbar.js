

// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const Navbar = () => {
// //   return (
// //     <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center">
// //       <div className="text-white font-semibold text-xl">
// //       <Link to="/" className="text-white">
// //       Reven IT Store
// //           </Link>
// //       </div>
// //       <ul className="flex space-x-4">
// //         <li>
// //           <Link to="/" className="text-white">
// //             Home
// //           </Link>
// //         </li>
// //         <li>
// //           <Link to="/products" className="text-white">
// //             Products
// //           </Link>
// //         </li>
// //         <li>
// //           <Link to="/about" className="text-white">
// //             About Us
// //           </Link>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center">
//       <div className="text-white font-semibold text-xl">
//         <Link to="/" className="text-white">
//           Reven IT Store
//         </Link>
//       </div>
//       <ul className="flex space-x-4 items-center">
//         <li>
//           <Link to="/" className="text-white">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/products" className="text-white">
//             Products
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="text-white">
//             About Us
//           </Link>
//         </li>
//         <li>
//           <i className="bx bx-cart text-white" style={{ fontSize: '1.7rem' }}></i>
//         </li>
//         <li>
//           <i className="bx bx-log-in text-white" style={{ fontSize: '1.7rem' }}></i>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <i
            className="bx bx-cart text-white block py-2 px-2"
            style={{ fontSize: '1.5rem' }}
          ></i>
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
