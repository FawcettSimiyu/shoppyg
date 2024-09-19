import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const OrderSummary = () => {
    const [total, setTotal] = useState();
    const cartItem = useSelector(state => state.cart.cartItem);
    useEffect(() => {
        setTotal(cartItem.reduce((acc, cum) => acc + parseInt(cum.price)*cum.quantity, 0))
    }, [])
    return (
        <div className='md:w-1/2 bg-white p-5 w-full rounded-md shadow-md'>
            <h2 className='font-medium text-lg'>Order Summary</h2>
            <ul className='p-3 mt-3 border-2 border-slate-100 rounded-lg flex flex-col gap-2'>
                {cartItem.map((product) => (
                    <li className='flex gap-3'>
                        <div className='bg-white rounded-lg border-2 border-slate-200 w-24 h-24'>
                            <img src={product.images} alt="product" className='w-full h-full' />
                        </div>
                        <div>
                            <h2 className='font-semibold text-lg'>{product.title}</h2>
                            <p className='font-medium text-base'>$ {product.price}</p>
                            <p className='font-nomral text-base text-gray-600'>Qty : {product.quantity}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-5 bg-white text-black p-5 rounded-lg">
                <p className='font-semibold text-base'>Total Products: {cartItem.length}</p>
                <p className='font-semibold text-base'>Subtotal: ${total}</p>
                <p className='font-semibold text-base'>Tax: $3</p>
                <p className="font-medium bg-blue-500 text-white pl-3 pr-3 py-3 mt-2 rounded-md">Total: $ {total + 3}</p>
                <Link to='/products'><button className='bg-black text-white py-2 w-full md:px-5 md:py-2 mt-3 rounded-md'>Cancel</button></Link>
            </div>
            
        </div>
    )
}

export default OrderSummary;