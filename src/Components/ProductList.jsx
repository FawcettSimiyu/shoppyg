import { useFetch } from '../utils/useFetch'; // Fetch product custom hook
import ProductItem from './ProductItem'; // Product card component
import Loading from './Loading'; // Loading animation
import Error from './Error'; // Error component (optional, can be created

const ProductList = ({ searchText, category, minPrice, maxPrice }) => {
  const { productData, loading, error } = useFetch('https://dummyjson.com/products'); // Custom hook destructuring the result

  // Handle cases where productData is undefined or null
  const products = productData?.products || []; // Use optional chaining to avoid errors

  // Convert minPrice and maxPrice to floats for numerical comparisons
  const minPriceFloat = parseFloat(minPrice);
  const maxPriceFloat = parseFloat(maxPrice);

  // Filtering products based on search field, category, and price range
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = category ? product.category.toLowerCase() === category.toLowerCase() : true;
    
    // Check if product price falls within the specified range
    const matchesPrice = (isNaN(minPriceFloat) || product.price >= minPriceFloat) &&
                         (isNaN(maxPriceFloat) || product.price <= maxPriceFloat);
    
    // Return true if all conditions are met
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Error handling
  if (error) {
    return <Error message="Failed to load products. Please try again later." />;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='flex flex-wrap justify-center items-center gap-4 w-4/5 mx-auto'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))
          ) : (
            <p className="text-center">No products found.</p> // Display message if no products match the search
          )}
        </div>
      )}
    </>
  );
};

export default ProductList;

