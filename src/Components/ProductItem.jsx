import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../utils/cartSlice";
import { useState } from "react";

const ProductItem = ({ product }) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const dispatch = useDispatch();
    const handleCart = () => {
        setIsAddedToCart(true);
        dispatch(addCart(product))
    }
    return (
        <>
            <div className='bg-transparent md:w-60 w-full md:hover:scale-105'>
                <Link to={`/products/${product.id}`}>
                    <div>
                        <div className='bg-LightGreen flex justify-center rounded-lg'><img src={product.images} alt="product_image" className="w-56 h-56 rounded-lg" /></div>
                        <h2 className='font-semibold text-lg mt-1'>{product.title.length >= 12 ? product.title.slice(0, 15) + '...' : product.title}</h2>
                        <p className='font-semibold text-base mt-1 text-Vermillion'>${product.price}</p>
                    </div>
                </Link>
                <button className="bg-blue-500 text-white px-4 py-1 mt-2" onClick={handleCart}>{isAddedToCart ? 'Go to cart' : 'Add to cart'}</button>
            </div>
        </>

    )
}
export default ProductItem;
// product card