import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 text-white">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p>
              Reven IT Store are a modern eCommerce store providing high-quality products at
              affordable prices.
            </p>
          </div>
          <div className="space-y-4 text-white">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="list-none space-y-2">
              <li>Home</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-4 text-white">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="list-none space-y-2">
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="space-y-4 text-white">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p>
                69, 71 New Elephant Rd, Dhaka 1205, Bangladesh
              <br />
              support@revenitstore.com
              <br />
              (+880) 173-4567898
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-white">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Reven IT Store. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
