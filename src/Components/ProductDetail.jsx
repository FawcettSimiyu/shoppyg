import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { useFetch } from '../utils/useFetch';
import { addCart } from '../utils/cartSlice';
import ProductReview from './ProductReview';
import PopUp from './PopUp';
import Loading from './Loading';

const ProductDetail = () => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [productData, setProductData] = useState(null);
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const [popUpMessage, setPopUpMessage] = useState('');
    const { productData: fetchedProductData, loading, error } = useFetch(`https://dummyjson.com/products/${productId}`);

    useEffect(() => {
        if (fetchedProductData) {
            setProductData(fetchedProductData);
        }
    }, [fetchedProductData]);

    const dispatch = useDispatch();

    const handleAddCart = () => {
        dispatch(addCart(productData));
        setIsAddedToCart(true);
        setPopUpMessage('Your Product has been added to your cart!');
        
        // Show popup for 2 seconds
        setTimeout(() => { setPopUpMessage(''); }, 2000);
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p className='text-center text-xl font-medium p-4'>{`Error: ${error}`}</p>;
    }

    return (
        <div>
            {popUpMessage && <PopUp message={popUpMessage} />}
            <div className='w-full md:p-2 flex flex-col md:flex-row md:justify-center justify-center p-5 gap-5 md:mt-10 mt-5'>
                <div className='md:w-3/12 w-full flex flex-shrink-0 bg-gray-100 rounded-sm p-3'>
                    <img src={productData.images} alt="product_image" className='w-full h-full object-contain' />
                </div>

                <div className='md:w-1/2 w-full'>
                    <h2 className='font-medium md:text-4xl text-3xl mb-1'>{productData.title}</h2>
                    <p className='font-light text-base text-gray-400'>{productData.description}</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <p className='font-semibold text-3xl'>${productData.price}</p>
                        <p className='bg-red-100 border-2 border-red-200 text-xs font-base px-3 py-1 rounded-full'>Off {productData.discountPercentage}%</p>
                    </div>

                    <div className='flex items-center gap-4 mt-4'>
                        <button 
                            className='relative px-10 py-4 text-white text-lg font-semibold bg-purple-600 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300' 
                            onClick={handleAddCart}
                        >
                            {isAddedToCart ? 'Go to cart' : 'Add to cart'}
                        </button>
                        <button 
                            className='relative px-10 py-4 text-white text-lg font-semibold bg-orange-600 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-500 focus:outline-none' 
                        >
                            Wishlist
                        </button>
                    </div>

                    <div className='w-fit mt-5'>
                        <ul className='flex gap-2 items-center'>
                            <li className='border-2 border-gray-200 p-3 md:text-sm text-xs'>{productData.warrantyInformation}</li>
                            <li className='border-2 border-gray-200 p-3 md:text-sm text-xs'>{productData.shippingInformation}</li>
                            <li className='border-2 border-gray-200 p-3 md:text-sm text-xs'>{productData.returnPolicy}</li>
                        </ul>
                    </div>
                    <section className='bg-gray-50 mt-6 p-5'>
                        <h2 className='font-medium text-black text-lg'>Product Information</h2>
                        <ul id="about" className='mt-3'>
                            <li className='text-black text-sm'>Brand : {productData.brand}</li>
                            <li className='text-black text-sm'>Minimum Order Quantity : {productData.minimumOrderQuantity}</li>
                            <li className='text-black text-sm'>In Stock : {productData.stock}</li>
                            <li className='text-black text-sm'>Weight : {productData.weight}gms</li>
                            <li className='text-black text-sm'>
                                Dimensions:
                                {productData?.dimensions ? ` ${productData.dimensions.width} x ${productData.dimensions.height} x ${productData.dimensions.depth}` : 'N/A'}
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
            <ProductReview productData={fetchedProductData} />
        </div>
    );
}

export default ProductDetail;

