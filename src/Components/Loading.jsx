import React from 'react';
import loading from '../assets/loaingAnimation.gif';


const Loading = () => {
  return (
    <div className='flex justify-center'>
        <img src={loading} alt="loading" className='w-10 h-5' />
    </div>
  )
}

export default Loading;
// loading component