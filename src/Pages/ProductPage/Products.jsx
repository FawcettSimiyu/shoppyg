import { useState } from 'react';
import search_icon from '../../assets/search_icon.svg';
import ProductList from '../../Components/ProductList';

const Products = () => {
    const [inputValue, setInputValue] = useState('');
    const [searchText, setSearchText] = useState('');
    const handleInput = (event) => { setInputValue(event.target.value); }
    const handleSearch = () => { setSearchText(inputValue); }

    return (
        <section id='productPage' className='mb-10'>
            {/*searchField section*/}
            <section id='searchField' className='flex justify-center items-center m-5 md:p-5 p-2'>
                <div className="flex justify-center mx-auto items-center gap-2">
                    <input type="text" placeholder="Enter a product to search" className="md:w-full w-full h-10 md:pl-2 md:pr-10 pl-1 pr-5 bg-transparent text-base outline-none border-2 border-black" onChange={handleInput} />
                    <button className="md:px-6 md:py-1 px-3 py-2 bg-black flex justify-center items-center gap-1" onClick={handleSearch}>
                        <h2 className='text-white md:font-base font-sm'>Search</h2>
                        <img src={search_icon} alt="" className='hidden md:block md:w-8 md:h-8' />
                    </button>
                </div>
            </section>
            {/* productList Component */}
            <ProductList searchText={searchText} />
        </section>
    )
}
export default Products;