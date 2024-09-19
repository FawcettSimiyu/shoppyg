import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../utils/cartSlice';

const CartItem = ({ product, removeItem }) => {
  const dispatch = useDispatch();
  
  const handleRemove = () => {
    removeItem(product.id);
  }
  const increaseQunatity = () => {
    dispatch(updateQuantity({ id: product.id, quantity: product.quantity + 1 }));
  }
  const decreaseQuantity = () => {
    if (product.quantity > 1) {
      dispatch(updateQuantity({ id: product.id, quantity: product.quantity - 1 }));
    }
  }

  return (
    // inidividual cart item product
    <div id='leftPart' className='bg-white border-b-2 border-gray-300 p-5 flex md:flex-row flex-col  gap-4'>
      <div className='md:w-48 md:h-48 w-fit h-fit'>
        <img src={product.images} alt="product_image" className='w-full h-full bg-gray-50 rounded-lg p-1 border-2 border-slate-100' />
      </div>
      <div>
        <h2 className='font-medium text-xl'>{product.title}</h2>
        <p className='font-semibold text-3xl text-black'>$ {product.price}</p>
        <div className='mt-2 flex gap-4 items-center'>
          <p className='text-lg font-base'>Quantity</p>
          <div className='flex gap-2 items-center mt-2'>
            {/* btn for increase and decersing product */}
            <button className='bg-black px-3 py-1 text-white' onClick={increaseQunatity}>+</button>  
            <p>{product.quantity}</p>
            <button className='bg-black  px-3 py-1 p-1 text-white' onClick={decreaseQuantity}>-</button>
          </div>
        </div>
        <div className='mt-10 flex gap-5'>
          <button className='md:px-6 md:py-1.5 px-3 py-1 bg-Vermillion text-white text-sm md:text-base font-normal rounded-sm' onClick={handleRemove}>Remove item</button>
          <button className='md:px-6 md:py-1.5 px-3 py-1 bg-gray-100 text-black font-medium text-sm md:text-base rounded-sm'>Save later</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
// the cart item card