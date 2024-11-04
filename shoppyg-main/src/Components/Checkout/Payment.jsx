import React from 'react';
import { FaCreditCard, FaLock, FaCalendarAlt } from 'react-icons/fa'; // Importing icons for input fields
import { SiVisa, SiMastercard, SiPaypal, SiAmericanexpress } from 'react-icons/si'; // Importing payment method icons

const Payment = ({ onClick }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onClick();
    }

    return (
        <div className='p-6 bg-white rounded-lg shadow-lg'>
            <h2 className='font-semibold text-2xl text-gray-800 mb-4'>Payment Details</h2>
            <form className='w-full' onSubmit={handleSubmit}>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="cardNumber" className='mb-1 font-medium text-gray-700'>Card Number</label>
                    <div className='flex items-center border rounded-lg border-gray-300'>
                        <FaCreditCard className='text-gray-500 ml-3' />
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            placeholder='Enter your card number'
                            className='bg-transparent h-12 py-1 pl-2 pr-3 outline-none flex-grow'
                            required
                        />
                    </div>
                </div>

                <div className='flex flex-col mb-4'>
                    <label htmlFor="ccv" className='mb-1 font-medium text-gray-700'>CCV</label>
                    <div className='flex items-center border rounded-lg border-gray-300'>
                        <FaLock className='text-gray-500 ml-3' />
                        <input
                            type="number"
                            id="ccv"
                            name="ccv"
                            placeholder='Enter your CCV'
                            className='bg-transparent h-12 py-1 pl-2 pr-3 outline-none flex-grow'
                            required
                        />
                    </div>
                </div>

                <div className='flex flex-col mb-4'>
                    <label htmlFor="expiryDate" className='mb-1 font-medium text-gray-700'>Expiry Date (MM/YY)</label>
                    <div className='flex items-center border rounded-lg border-gray-300'>
                        <FaCalendarAlt className='text-gray-500 ml-3' />
                        <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            placeholder='MM/YY'
                            className='bg-transparent h-12 py-1 pl-2 pr-3 outline-none flex-grow'
                            required
                        />
                    </div>
                </div>

                <button
                    className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium px-4 py-3 w-full rounded-md shadow-md transition duration-200 hover:from-blue-600 hover:to-indigo-700'
                    type='submit'
                >
                    Confirm Order
                </button>
            </form>

            {/* Payment Method Icons */}
            <div className='mt-6'>
                <h3 className='font-semibold text-lg text-gray-800'>Accepted Payment Methods</h3>
                <div className='flex justify-between mt-3'>
                    <SiVisa className='text-blue-500 h-8 w-8' />
                    <SiMastercard className='text-red-500 h-8 w-8' />
                    <SiPaypal className='text-blue-600 h-8 w-8' />
                    <SiAmericanexpress className='text-blue-800 h-8 w-8' />
                </div>
            </div>
        </div>
    );
}

export default Payment;

