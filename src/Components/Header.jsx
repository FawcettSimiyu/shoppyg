import React, { useState } from 'react';
import profile_icon from '../assets/profile_icon.png';
import cart_icon from '../assets/cart_icon.png';
import product_icon from '../assets/product_icon.svg';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-center">
          <Link to="/">ShoppyGlobe</Link>
        </h2>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center text-base font-medium text-gray-700">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li>
            <Link to="/products" className="flex items-center gap-2 hover:text-blue-500">
              Products <img src={product_icon} alt="Product icon" className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <Link to="/cartproduct" className="flex items-center gap-2 hover:text-blue-500">
              Cart <img src={cart_icon} alt="Cart icon" className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <img src={profile_icon} alt="Profile icon" className="w-8 h-8 ml-4" />
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button onClick={handleMenu} className="md:hidden text-gray-700 focus:outline-none">
          <HiOutlineMenu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 shadow-md">
          <ul className="flex flex-col gap-4 p-5 items-end text-gray-700 text-lg">
            <li><Link to="/" className="hover:text-blue-500" onClick={handleMenu}>Home</Link></li>
            <li>
              <Link to="/products" className="flex items-center gap-2 hover:text-blue-500" onClick={handleMenu}>
                Products <img src={product_icon} alt="Product icon" className="w-5 h-5" />
              </Link>
            </li>
            <li>
              <Link to="/cartproduct" className="flex items-center gap-2 hover:text-blue-500" onClick={handleMenu}>
                Cart <img src={cart_icon} alt="Cart icon" className="w-5 h-5" />
              </Link>
            </li>
            <li>
              <img src={profile_icon} alt="Profile icon" className="w-8 h-8" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;

