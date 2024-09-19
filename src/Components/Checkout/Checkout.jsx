import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { clearCart } from '../../utils/cartSlice';
import OrderSummary from './OrderSummary';
import ShippingAddress from './ShippingAddress';
import Payment from './Payment';
import PopUp from '../PopUp';

const Checkout = () => {
  const [currentForm, setCurrentForm] = useState('shipping');
  const [confirmOrder, setConfirmOrder] = useState(false);
  const cartItem = useSelector(state => state.cart.cartItem);
  const [orderItems, setOrderItems] = useState(cartItem);

  const disptach = useDispatch();
  const handleContinue = () => {
    setCurrentForm('payment');
  }
  const handleConfirmOrder = () => {
    console.log(orderItems)
    setConfirmOrder(true);
    disptach(clearCart())
  }
  return (
    <div>
      <header className='p-5 border-b-2 border-gray-100'>
        <h2 className='font-normal text-lg font-Poppins'>Shoppy Global</h2>
      </header>
      {/* conditional rendering for shpping form and payment and continue to order place after placing order shows the list of the item we have added */}
      {!confirmOrder ?
        <section className='bg-gray-100 p-3 h-full w-full'>
          <div className='flex md:flex-row gap-5 flex-col'>
            <OrderSummary />
            <div className='md:w-1/2 w-full'>
              {currentForm === 'shipping' && <ShippingAddress onContinue={handleContinue} />}
              {currentForm === 'payment' && <Payment onClick={handleConfirmOrder} />}
            </div>
          </div>

        </section>
        :
        <div className='flex flex-col justify-center items-center'>
          <PopUp title={true} />
          <Link to='/products'><button className='bg-blue-500 text-white font-medium px-6 py-3 mt-5'>Back to shopping</button></Link>
          <div className='mt-5'>
            <h2 className='font-medium text-2xl'>Your Orders</h2>
            <ul>
              {
                orderItems.map((item) => (
                  <li key={item.id} className='mb-2'>
                    <div className='flex justify-between'>
                      <span>{item.title}</span>
                      <span>${item.price}</span>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      }
    </div>
  )
}

export default Checkout