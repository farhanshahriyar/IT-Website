import { Spinner } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import { CartContext } from '../App';

const ProductInfo = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
 

  const [count, setCount] = useState(1);
  const { cart, setCart } = React.useContext(CartContext);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('../db.json');
      const data = await response.json();
      const singleProduct = data.products.find((product) => +product.id === +id);
     setTimeout(() => {
      setProduct(singleProduct);
     }, 1000);
      console.log(singleProduct)

    }
    fetchData();
  }, [id]);

  if (!product) {
    return <div className="flex justify-center items-center h-screen">
       <Spinner
    thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    /> 
    </div>
    
  }

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
          <button className="border border-gray-400 rounded px-2 py-1" onClick={()=> setCount(count-1)}>-</button>
          <input className="border border-gray-400 w-16 mx-2 text-center" type="number" value={count} min="1" />
          <button className="border border-gray-400 rounded px-2 py-1" onClick={()=> setCount(count+1)}>+</button>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4" onClick={()=>{
          const cart = JSON.parse(localStorage.getItem('cart')) || [];
          const item = cart.find((item) => item.id === product.id);
          if (item) {
            item.count += count;
          } else {
            cart.push({ ...product, count });
          }
          setCart(cart);
          setCount(1);
          localStorage.setItem('cart', JSON.stringify(cart));
        }}>Add to Cart</button>
        <button className="bg-red-600 text-white px-4 py-2 rounded mt-4 ml-4">Wishlist</button>
        <hr className="my-8" />
        <h2 className="text-2xl font-bold text-gray-800">Product Configuration</h2>
      </div>
    </div>
  );
};

export default ProductInfo;

