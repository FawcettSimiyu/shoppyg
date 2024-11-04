import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../../utils/cartSlice';
import OrderSummary from './OrderSummary';
import ShippingAddress from './ShippingAddress';
import Payment from './Payment';
import PopUp from '../PopUp';

const Checkout = () => {
    const [currentForm, setCurrentForm] = useState('shipping');
    const [confirmOrder, setConfirmOrder] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItem);
    const dispatch = useDispatch();

    const handleContinue = () => {
        setCurrentForm('payment');
    };

    const handleConfirmOrder = () => {
        setConfirmOrder(true);
        dispatch(clearCart());
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="p-5 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Shoppy Global</h2>
            </header>
            {/* Conditional rendering for shipping form and payment */}
            {!confirmOrder ? (
                <section className="flex flex-col md:flex-row gap-5 p-5">
                    <OrderSummary />
                    <div className="md:w-1/2 w-full bg-white shadow rounded-lg p-5">
                        {currentForm === 'shipping' && (
                            <ShippingAddress onContinue={handleContinue} />
                        )}
                        {currentForm === 'payment' && (
                            <Payment onClick={handleConfirmOrder} />
                        )}
                    </div>
                </section>
            ) : (
                <div className="flex flex-col items-center p-5">
                    <PopUp title={true} />
                    <Link to="/products">
                        <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition duration-200">
                            Back to Shopping
                        </button>
                    </Link>
                    <div className="mt-5 w-full">
                        <h2 className="font-medium text-2xl text-gray-800">Your Orders</h2>
                        <ul className="mt-2">
                            {cartItems.map((item) => (
                                <li key={item.id} className="mb-2 border-b border-gray-200 pb-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">{item.title}</span>
                                        <span className="font-semibold text-gray-800">${item.price}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;

