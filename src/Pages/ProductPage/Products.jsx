import React, { useState, lazy, Suspense } from 'react';
import search_icon from '../../assets/search_icon.svg';

const ProductList = lazy(() => import('../../Components/ProductList'));

const Products = () => {
    const [inputValue, setInputValue] = useState('');
    const [searchText, setSearchText] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        setSearchText(inputValue);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    return (
        <section id="productPage" className="mb-10 p-4 bg-gray-100"> {/* Background color for the whole section */}
            {/* Search Field Section */}
            <section id="searchField" className="flex flex-col md:flex-row justify-center items-center mb-5">
                <div className="flex justify-center items-center gap-2 w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Enter a product to search"
                        className="w-full h-12 px-4 bg-white text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
                        onChange={handleInput}
                    />
                    <button
                        className="flex items-center justify-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
                        onClick={handleSearch}
                    >
                        <span className="font-semibold">Search</span>
                        <img src={search_icon} alt="Search icon" className="w-5 h-5" loading="lazy" />
                    </button>
                </div>
            </section>

            {/* Filters Section */}
            <section className="flex justify-center items-center gap-4 mb-5">
                <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
                >
                    <option value="">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="accessories">Accessories</option>
                </select>
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition"
                />
            </section>

            {/* Product List Component with Lazy Loading */}
            <Suspense fallback={<div className="text-center text-lg">Loading products...</div>}>
                <ProductList 
                    searchText={searchText} 
                    category={category} 
                    minPrice={minPrice} 
                    maxPrice={maxPrice} 
                />
            </Suspense>
        </section>
    );
};

export default Products;

