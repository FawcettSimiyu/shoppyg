import React from 'react';
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='bg-Vermillion text-white w-full h-screen text-center'>
            <h1 className='font-semibold text-5xl'>404</h1>
            <p className='text-2xl font-light mt-1'>Error has been Occured, please check your request url</p>
            <Link to="/">
                <button className='bg-white px-5 py-2 text-black mt-2'>Back to home</button>
            </Link>
        </div>
    )
}
export default Error;
//error component