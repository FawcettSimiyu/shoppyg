import React from 'react';
import profile_icon from '../assets/profile_icon.png';
import cart_icon from '../assets/cart_icon.png';
import product_icon from '../assets/product_icon.svg';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav>
      <div className='p-5 flex justify-between items-center border-2 border-slate-200'>
        <h2 className='font-semibold text-lg '>ShoppyGlobe</h2>
        <ul className='hidden md:flex gap-6 items-center font-normal text-base'>
          <Link><li>Home</li></Link>
          <Link to="/products"><li className='flex items-center gap-1'>Products <img src={product_icon} alt="producticon" className='w-5 h-5' /></li></Link>
          <Link to='/cartproduct'><li className='flex items-center gap-1'>Cart<img src={cart_icon} alt="cart_icnon" className='w-5 h-5' /></li></Link>
          <li><img src={profile_icon} alt="profile_icon" className='w-8 h-8 ml-4' /></li>
        </ul>
        <div className='md:hidden'>
          <HiOutlineMenu className='w-8 h-8' onClick={handleMenu} />
        </div>
      </div>

      {isOpen && <div className='bg-LightGreen md:hidden'>
        <ul className='flex flex-col gap-6 justify-end items-end font-normal text-base p-5 text-black'>
          <Link>
            <li>Home</li>
          </Link>
          <Link to="/products">
            <li className='flex items-center gap-1'>Products <img src={product_icon} alt="producticon" className='w-5 h-5' /></li>
          </Link>
          <Link to='/cartproduct'>
            <li className='relative flex items-center gap-1'>Cart<img src={cart_icon} alt="cart_icnon" className='w-5 h-5' /></li>
          </Link>
          <li>
            <img src={profile_icon} alt="profile_icon" className='w-8 h-8 ml-4' />
            </li>
        </ul>
      </div>}
    </nav>
  )
}
export default Header;
// navbar component