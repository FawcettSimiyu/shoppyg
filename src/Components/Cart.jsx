import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { removeCart } from '../utils/cartSlice';
import cart_icon from '../assets/cart_icon.png';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();
  const tax = 3;

  useEffect(() => {
    setTotal(cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0));
  }, [cartItems]);

  const removeProduct = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <>
      {/* Floating Cart Icon with Badge */}
      <div className="fixed top-4 right-4 z-50">
        <Link to="/cart" className="relative">
          <img src={cart_icon} alt="Cart Icon" className="w-10 h-10" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>

      {cartItems.length > 0 ? (
        <div className="bg-white w-full p-5 flex flex-col md:flex-row justify-center gap-8">
          {/* Left: Cart Items */}
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            {cartItems.map((product) => (
              <CartItem product={product} removeItem={removeProduct} key={product.id} />
            ))}
          </div>

          {/* Right: Order Summary */}
          <div className="bg-gray-100 p-6 rounded-lg md:w-1/3 w-full h-auto shadow-md">
            <h2 className="font-semibold text-2xl mb-4">Order Summary</h2>
            <ul className="space-y-3">
              <li className="text-lg">Total Products: {cartItems.length}</li>
              <li className="text-lg">Subtotal: $ {total.toFixed(2)}</li>
              <li className="text-lg">Tax: $ {tax.toFixed(2)}</li>
              <li className="font-semibold text-xl">Total Amount: $ {(total + tax).toFixed(2)}</li>
            </ul>
            <Link to="/checkout">
              <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 mt-6 rounded hover:bg-blue-700 transition duration-200">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p className="font-medium text-lg text-gray-700 text-center mt-10">Your cart is currently empty.</p>
      )}

      {/* Back to Products Button */}
      <div className="flex justify-center mt-5">
        <Link to="/products">
          <button className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200">
            Back to Products
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cart;

