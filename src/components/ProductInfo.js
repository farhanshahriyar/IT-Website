
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

const ProductInfo = () => {
  const product = {
    id: 1,
    title: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
    price: '$599.99',
    available: true,
    reviews: 4.5,
    info: 'A great smartphone with awesome features.',
  };

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center items-center">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: product.title,
              isFluidWidth: true,
              src: product.image,
            },
            largeImage: {
              src: product.image,
              width: 1200,
              height: 1800,
            },
          }}
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-gray-600">Rating: {product.reviews}</p>
        <p className="text-gray-600 mt-4">{product.info}</p>
        <p className="text-gray-600 mt-4">{product.price}</p>
        <p className="text-gray-600 mt-4">{product.available ? 'In Stock' : 'Out of Stock'}</p>
        <div className="mt-4 flex items-center">
          <button className="border border-gray-400 rounded px-2 py-1">-</button>
          <input className="border border-gray-400 w-16 mx-2 text-center" type="number" value="1" min="1" />
          <button className="border border-gray-400 rounded px-2 py-1">+</button>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Add to Cart</button>
        <button className="bg-red-600 text-white px-4 py-2 rounded mt-4 ml-4">Wishlist</button>
        <hr className="my-8" />
        <h2 className="text-2xl font-bold text-gray-800">Product Configuration</h2>
        {/* Add your product configuration info here */}
      </div>
    </div>
  );
};

export default ProductInfo;

