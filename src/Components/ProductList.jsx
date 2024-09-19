import { useFetch } from '../utils/useFetch'; // Fetch product custom hook
import ProductItem from './ProductItem'; // product Card component
import Loading from './Loading'; // loading animation

const ProductList = ({ searchText }) => {
  const { productData, loading } = useFetch('https://dummyjson.com/products'); // custom hook destrcuting the result
  const products = productData && productData.products ? productData.products : []; // to check the api response is weather single product or whole product.
  const filterdProduct = products.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase())); // filtering product based on search field.
  return (
    <>
      {loading ? <Loading /> :
        <div className='flex flex-wrap justify-center items-center gap-4 w-4/5 mx-auto'>
          {
            filterdProduct.map((product) => (<ProductItem product={product} key={product.id} />))
          }
        </div>}
    </>
  )
}

export default ProductList;
// shows all product data