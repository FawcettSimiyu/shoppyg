import { useFetch } from '../../utils/useFetch';
import ProductItem from '../ProductItem';
import Loading from '../Loading';

const TopSelling = () => {
    const { productData,loading } = useFetch('https://dummyjson.com/products');
    const products = productData && productData.products ? productData.products : [];
    const filterProduct = products.length >= 5 ? products.slice(0, 5) : products;
   
    return (
        <section className='flex justify-center items-center mt-10 p-5'>
        <div>
            <div className='flex gap-1'>
                <div className='bg-Vermillion w-3 h-7'></div>
                <h2 className='font-semibold font-Poppins text-lg text-Vermillion rounded-sm mb-5'>Top Selling</h2>
            </div>
            <h2 className='font-semibold text-xl text-black mb-2'>Get 50% flat discount on top selling</h2>
            {loading ? <Loading /> :<div className='flex flex-wrap md:gap-4 gap-2 mt-3 items-center'>
                {filterProduct.map((product) => (<ProductItem product={product} key={product.id} />))}
            </div>}
        </div>
    </section>
    )
}

export default TopSelling;
// this component shows the product which are top selling