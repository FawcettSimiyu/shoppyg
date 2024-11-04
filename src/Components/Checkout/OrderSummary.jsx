import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const OrderSummary = () => {
    const [total, setTotal] = useState(0);
    const cartItems = useSelector(state => state.cart.cartItem);

    useEffect(() => {
        const calculatedTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setTotal(calculatedTotal);
    }, [cartItems]);

    return (
        <div className='md:w-1/2 bg-white p-5 w-full rounded-md shadow-lg border border-gray-200'>
            <h2 className='font-semibold text-2xl text-gray-900 mb-4'>Order Summary</h2>
            <ul className='p-3 border border-blue-300 rounded-lg flex flex-col gap-4 bg-blue-50'>
                {cartItems.map((product) => (
                    <li key={product.id} className='flex gap-3 items-start border-b border-gray-300 pb-3'>
                        <div className='bg-gray-100 rounded-lg border border-gray-300 w-24 h-24 overflow-hidden flex items-center justify-center shadow-sm'>
                            <img src={product.images} alt={product.title} className='w-full h-full object-cover' />
                        </div>
                        <div className='flex-grow'>
                            <h3 className='font-semibold text-lg text-gray-800'>{product.title}</h3>
                            <p className='font-medium text-base text-blue-700'>${product.price.toFixed(2)}</p>
                            <p className='text-base text-gray-600'>Qty: {product.quantity}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-5 p-5 bg-gray-100 rounded-lg shadow-md">
                <p className='font-semibold text-base text-gray-800'>Total Products: {cartItems.length}</p>
                <p className='font-semibold text-base text-gray-800'>Subtotal: ${total.toFixed(2)}</p>
                <p className='font-semibold text-base text-gray-800'>Tax: $3.00</p>
                <p className="font-bold text-xl text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-md py-3 mt-2 text-center">
                    Total: ${ (total + 3).toFixed(2) }
                </p>
                <Link to='/products'>
                    <button className='bg-red-500 text-white py-2 w-full rounded-md mt-3 transition duration-200 hover:bg-red-600'>
                        Cancel
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default OrderSummary;

