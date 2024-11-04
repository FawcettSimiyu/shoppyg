import { useFetch } from '../../utils/useFetch';
import ProductItem from '../ProductItem';
import Loading from '../Loading';

const NewArrival = () => {
    const { productData, loading } = useFetch('https://dummyjson.com/products');
    const products = productData && productData.products ? productData.products : [];
    const filterProduct = products.length >= 5 ? products.slice(0, 5) : products;

    return (
        <section className='bg-white p-5 rounded-lg shadow-lg'>
            <div className='flex flex-col items-center'>
                <div className='flex items-center mb-5'>
                    <div className='bg-red-600 w-3 h-7 rounded-full'></div>
                    <h2 className='font-semibold font-Poppins text-lg text-red-600 ml-2'>New Arrivals</h2>
                </div>
                <h2 className='font-semibold text-2xl text-gray-800 mb-4 text-center'>
                    Move Forward with New Trends
                </h2>
                {loading ? (
                    <Loading />
                ) : (
                    <div className='flex flex-wrap md:gap-4 gap-2 mt-3 justify-center'>
                        {filterProduct.map((product) => (
                            <ProductItem product={product} key={product.id} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default NewArrival;

