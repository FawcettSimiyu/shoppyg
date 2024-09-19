import React from 'react'

const Payment = ({onClick}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onClick();
    }
    return (
        <div className='p-5 bg-white rounded-md shadow-md'>
            <h2 className='font-semibold text-xl'>Payment</h2>
            <form className='w-full mt-5'>
                <div className='flex flex-col mb-2'>
                    <label className='mb-1 font-medium'>Card Number</label>
                    <input type="number" name="cardNumber" placeholder='Enter your card Number' className='bg-transparent border-2 border-gray-300 rounded-lg h-12 py-1 pl-2 pr-3 outline-none' required />
                </div>
                <div className='flex flex-col mb-2'>
                    <label className='mb-1 font-medium'>CCV</label>
                    <input type="number" name="city" placeholder='Enter your CCV Number' className='bg-transparent border-2 border-gray-300 rounded-lg h-12 py-1 pl-2 pr-3 outline-none' required />
                </div>
                <div className='flex flex-col mb-2'>
                    <label className='mb-1 font-medium'>Expiry Date</label>
                    <input type="number" name="expiryDate" placeholder='Enter your State' className='bg-transparent border-2 border-gray-300 rounded-lg h-12 py-1 pl-2 pr-3 outline-none' required />
                </div>
                <button className='bg-blue-500 text-white font-medium px-4 py-3 w-full mt-3 rounded-md' id='btn' type='submit' onClick={handleSubmit}>
                    Confirm Order
                </button>
            </form>
        </div>
    )
}

export default Payment; 