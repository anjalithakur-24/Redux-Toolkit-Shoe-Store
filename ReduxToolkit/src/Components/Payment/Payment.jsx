import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Payment.css';

function Payment() {

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const cart = useSelector(state => state.cart);

  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-bold mb-4">Payment Page</h2>
      <div className="mb-4">
        <h3>Cart Summary:</h3>
        {cart.map(item => (
          <p key={item.id}>{item.name} - ₹{item.price} x {item.quantity}</p>
        ))}
        <h2 className='flex  text-xl'>Total:  ₹{calculateTotal()}</h2>
      </div>
      <form className="space-y-4">
        <input type="text" placeholder="Card Number" className="border p-2 w-full" />
        <input type="text" placeholder="MM/YY" className="border p-2 w-full" />
        <input type="text" placeholder="CVV" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-6 mt-4 w-96">
          Pay Now
        </button>
      </form>
      <Link to="/" className="mt-4 inline-block text-blue-500">
      <button type="submit" className="bg-blue-500 text-white py-2 px-6 mt-4 w-96">
          Return to Shopping
        </button>
      </Link>
    </div>
  );
}

export default Payment;