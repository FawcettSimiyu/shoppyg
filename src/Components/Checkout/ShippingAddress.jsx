import React, { useState } from 'react';
import { FaMapMarkedAlt, FaCity, FaMapSigns, FaMailBulk } from 'react-icons/fa';

const ShippingAddress = ({ onContinue }) => {
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        state: '',
        code: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear error on change
    };

    const validateForm = () => {
        const newErrors = {};
        const { address, city, state, code } = formData;

        if (!address) newErrors.address = "Address is required.";
        if (!city) newErrors.city = "City is required.";
        if (!state) newErrors.state = "State is required.";
        if (!code) {
            newErrors.code = "ZIP Code is required.";
        } else if (!/^\d{5}$/.test(code)) { // Validate ZIP code format
            newErrors.code = "ZIP Code must be 5 digits.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onContinue();
        }
    };

    return (
        <div className='p-6 bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg max-w-md mx-auto'>
            <h2 className='font-bold text-2xl mb-4 text-blue-800 text-center'>Shipping Address</h2>
            <form className='w-full mt-2' onSubmit={handleSubmit}>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="address" className='mb-1 font-medium text-gray-700'>Address</label>
                    <div className='flex items-center border rounded-lg border-blue-400 transition duration-200 focus-within:border-blue-600'>
                        <FaMapMarkedAlt className='text-blue-600 ml-3' />
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder='Enter your address'
                            className='bg-transparent h-12 py-1 pl-2 pr-3 outline-none flex-grow focus:ring-2 focus:ring-blue-300 transition duration-200'
                            required
                            autoComplete='address'
                        />
                    </div>
                    {errors.address && <p className='text-red-500 text-sm'>{errors.address}</p>}
                </div>

                <div className='flex flex-col mb-4'>
                    <label htmlFor="city" className='mb-1 font-medium text-gray-700'>City</label>
                    <div className='flex items-center border rounded-lg border-blue-400 transition duration-200 focus-within:border-blue-600'>
                        <FaCity className='text-blue-600 ml-3' />
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder='Enter your City'
                            className='bg-transparent h-12 py-1 pl-2 pr-3 outline-none flex-grow focus:ring-2 focus:ring-blue-300 transition duration-200'
                            required
                            autoComplete='address-level2'
                        />
                    </div>
                    {errors.city && <p className='text-red-500 text-sm'>{errors.city}</p>}
                </div>

                <div className='flex flex-col mb-4'>
                    <label htmlFor="state" className='mb-1 font-medium text-gray-700'>State</label>
                    <div className='flex items-center border rounded-lg border-blue-400 transition duration-200 focus-within:border-blue-600'>
                        <FaMapSigns className='text-blue-600 ml-3' />
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder='Enter your State'
                            className='bg-transparent h-12 py-1 pl-2 pr-3 outline-none flex-grow focus:ring-2 focus:ring-blue-300 transition duration-200'
                            required
                            autoComplete='address-level1'
                        />
                    </div>
                    {errors.state && <p className='text-red-500 text-sm'>{errors.state}</p>}
                </div>

                <div className='flex flex-col mb-4'>
                    <label htmlFor="code" className='mb-1 font-medium text-gray-700'>ZIP Code</label>
                    <div className='flex items-center border rounded-lg border-blue-400 transition duration-200 focus-within:border-blue-600'>
                        <FaMailBulk className='text-blue-600 ml-3' />
                        <input
                            type="text"
                            id="code"
                            name="code"
                            value={formData.code}
                            onChange={handleChange}
                            placeholder='Enter your ZIP code'
                            className='bg-transparent h-12 py-1 pl-2 pr-3 outline-none flex-grow focus:ring-2 focus:ring-blue-300 transition duration-200'
                            required
                            autoComplete='postal-code'
                        />
                    </div>
                    {errors.code && <p className='text-red-500 text-sm'>{errors.code}</p>}
                </div>

                <button
                    className='bg-blue-600 text-white font-semibold px-4 py-3 w-full mt-3 rounded-md transition duration-200 transform hover:bg-blue-700 hover:scale-105'
                    type='submit'
                >
                    Continue
                </button>
            </form>
        </div>
    );
};

export default ShippingAddress;

