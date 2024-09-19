import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { useFetch } from '../utils/useFetch';
import { addCart } from '../utils/cartSlice'
import ProductReview from './ProductReview';
import PopUp from './PopUp';
import Loading from './Loading';

const ProductDetail = () => {

    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [productDatas, setProductData] = useState([]);

    const { id } = useParams();
    const productId = parseInt(id, 10);
    const [popUp, setPopup] = useState(false);
    const { productData,loading,error } = useFetch(`https://dummyjson.com/products/${productId}`);

    useEffect(() => {
        setProductData(productData)
    }, [productData])
    // fetch the response data from custom hooks

    const dispatch = useDispatch();

    const handleAddCart = () => {
        dispatch(addCart(productData));
        setIsAddedToCart(true);
        setPopup(true);
        setTimeout(() => { setPopup(false) }, 2000)
    } // when the add to cart button is clicked it shows the pop up notification and add to reducx cart store


    if(loading){
        return <Loading />
    }

    if(error){
        return <p className='text-center text-xl font-medium p-4'>{`Error : ${error}`}</p>
    }

    return (
        <div>
            {popUp && <PopUp />}
            <div className='w-full md:p-2 flex flex-col md:flex-row md:justify-center justify-center p-5 gap-5 md:mt-10 mt-5'>

                <div className='md:w-3/12 w-full flex flex-shrink-0 bg-gray-100 rounded-sm p-3'>
                    <img src={productDatas.images} alt="product_image" className='w-full h-full object-contain' />
                </div>

                <div className='md:w-1/2 w-full'>

                    <h2 className='font-medium md:text-4xl text-3xl mb-1'>{productDatas.title}</h2>
                    <p className='font-light text-base text-gray-400'>{productDatas.description}</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <p className='font-semibold text-3xl'>${productDatas.price}</p>
                        <p className='bg-green-100 border-2 border-green-200 text-xs font-base px-3 py-1 rounded-full'>Off {productDatas.discountPercentage}%</p>
                    </div>

                    <div className='flex items-center gap-2 mt-4'>
                        <button className='px-6 md:py-1.5 py-3 text-white md:text-base text-sm font-medium bg-blue-500 rounded-sm md:flex-initial flex-1' onClick={handleAddCart}>{isAddedToCart ? 'Go to cart' : 'Add to cart'}</button>
                        <button className='px-6 md:py-1.5 py-3 text-white md:text-base text-sm bg-amber-500 font-medium rounded-sm md:flex-initial flex-1'>Wishlist</button>
                    </div>

                    <div className='w-fit mt-5'>
                        <ul className='flex gap-2 items-center'>
                            <li className='border-2 border-gray-200 p-3 md:text-sm text-xs'>{productDatas.warrantyInformation}</li>
                            <li className='border-2 border-gray-200 p-3 md:text-sm text-xs'>{productDatas.shippingInformation}</li>
                            <li className='border-2 border-gray-200 p-3 md:text-sm text-xs'>{productDatas.returnPolicy}</li>
                        </ul>
                    </div>
                    <section className='bg-gray-50 mt-6 p-5'>
                        <h2 className='font-medium text-black text-lg'>Product Information</h2>
                        <ul id="about" className='mt-3'>
                            <li className='text-black text-sm'>Brand : {productDatas.brand}</li>
                            <li className='text-black text-sm'>Minimum Order Quantity : {productDatas.minimumOrderQuantity}</li>
                            <li className='text-black text-sm'>In Stock : {productDatas.stock}</li>
                            <li className='text-black text-sm'>Weight : {productDatas.weight}gms</li>
                            <li className='text-black text-sm'>
                                Dimensions:
                                {productDatas?.dimensions ? ` ${productDatas.dimensions.width} x ${productDatas.dimensions.height} x ${productDatas.dimensions.depth}` : 'N/A'}
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
            <ProductReview productData={productData} />
        </div>
    )
}
export default ProductDetail;
// product details