import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../utils/cartSlice";
import { useState } from "react";

const ProductItem = ({ product }) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const dispatch = useDispatch();

    const handleCart = () => {
        setIsAddedToCart(true);
        dispatch(addCart(product));
    };

    return (
        <div className='bg-white border border-gray-300 rounded-lg shadow-md transition-transform transform hover:scale-105 p-4'>
            <Link to={`/products/${product.id}`}>
                <div className='bg-LightGreen flex justify-center rounded-lg p-2 mb-2'>
                    <img src={product.images[0]} alt={product.title} className="w-56 h-56 rounded-lg object-cover" />
                </div>
                <h2 className='font-semibold text-lg mt-1'>{product.title.length > 15 ? `${product.title.slice(0, 15)}...` : product.title}</h2>
                <p className='font-semibold text-base mt-1 text-Vermillion'>${product.price.toFixed(2)}</p>
            </Link>
            <button
                className={`relative px-6 py-3 text-white text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out transform ${isAddedToCart ? 'bg-yellow-600' : 'bg-green-600 hover:bg-yellow-500'} shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300`}
                onClick={handleCart}
            >
                {isAddedToCart ? 'Go to cart' : 'Add to cart'}
            </button>
        </div>
    );
};

export default ProductItem;

