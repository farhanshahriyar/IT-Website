import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../App';

const CartItem = ({ item }) => {
    const [count , setCount] = useState(item.count || 0);
    const { cart, setCart } = useContext(CartContext);
    // useEffect (() => { 
    //     const carts = JSON.parse(localStorage.getItem('cart')) || [];
    //       const items = cart.find((i) => item.id === i.id);
    //       if (items) {
    //         items.count += count;
    //       } else {
    //         carts.push({ ...cart, count });
    //       }
    //       setCart(cart);
    //       setCount(1);
    // }, [count])

  return (
    <div className="flex items-center justify-between py-4 border-b-2 border-gray-200">
      <div className="flex items-center">
        <img className="w-16 h-16 object-cover" src={item.image} alt={item.name} />
        <div className="ml-4">
          <h3 className="text-lg font-medium">{item.title}</h3>
          
          <p className="text-gray-500">${item.price * item.count}</p>
        </div>
      </div>
      <div>
        <span className="text-lg font-medium">{item.quantity}</span>
      </div>
      <div className="mt-4 flex items-center">
          <button className="border border-gray-400 rounded px-2 py-1" onClick={()=> {
            if (count === 1) return;
            const newItem = { ...item, count: count - 1 };
            const newCart = cart.map((item) => (item.id === newItem.id ? newItem : item));
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
            setCount(count - 1);
          }}>-</button>
          <input className="border border-gray-400 w-16 mx-2 text-center" type="number" value={count} min="1" />
          <button className="border border-gray-400 rounded px-2 py-1" onClick={()=> {
            const newItem = { ...item, count: count + 1 };
            const newCart = cart.map((item) => (item.id === newItem.id ? newItem : item));
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
            setCount(count + 1);
          }}>+</button>
        </div>
    </div>
  );
};

const Cart = () => {
    const { cart: cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.count), 0);
  console.log(cartItems)
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-8">Your Cart</h2>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      

      <div className="mt-8 flex flex-col items-end">
        <h3 className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</h3>
        <button
          onClick={() => alert('Payment is implemented successfully.')}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
