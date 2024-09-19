import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { removeCart } from '../utils/cartSlice';

const Cart = () => {
  const [total, setTotal] = useState();
  const cartItem = useSelector(state => state.cart.cartItem);
  const disptach = useDispatch();

  useEffect(() => {
    setTotal(cartItem.reduce((acc, cum) => acc + parseInt(cum.price)*cum.quantity, 0))
  }, [cartItem])
  // console.log(cartItem)
  const removeProduct = (id) => {
    disptach(removeCart(id))
  }

  return (
    <>
      {cartItem.length > 0 ?
        <div className='bg-white w-full p-5 flex md:flex-row flex-col justify-center gap-4'>
          {/* display the cart item products */}
          <div className='md:w-1/2 w-full flex flex-col gap-2'>
            { cartItem.length > 0 && cartItem.map((product) => ( <CartItem product={product} removeItem={removeProduct}key={product.id} /> )) }
          </div>
          {/* display the product order summary total */}
          <div id='rightPart' className='bg-gray-100 p-5 md:w-96 w-full h-fit'>
            <h1 className='font-base text-xl'>Order Summary</h1>
            <ul className='mt-5'>
              <li className='font-base text-medium'>Totoal Prducts : {cartItem.length}</li>
              <li className='font-bast text-medium'>Sub total : $ {total}</li>
              <li className='font-bast text-medium'>Tax : $ 3</li>
              <li className='font-bast text-medium'>Total Amount : ${total + 3} </li>
            </ul>
            <Link to='/checkout'><button className='w-full bg-blue-500 text-white font-normal py-2 px-4 mt-4'>Checkout</button></Link>
          </div>
        </div> : <p className='font-normal text-lg text-black text-center mt-5'>Your cart is empty</p>
        }
    </>
  )
}

export default Cart;

// in left part it shows the item added to the cart in right part shows the order summary