import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profile_icon from '../assets/profile_icon.png';
import cart_icon from '../assets/cart_icon.png';
import product_icon from '../assets/product_icon.svg';
import { HiOutlineMenu } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* Brand Name */}
        <h2 className="text-2xl font-bold text-gray-700">
          <Link to="/">ShoppyGlobe</Link>
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-lg">
          <li className={location.pathname === '/' ? 'text-blue-500' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/products' ? 'text-blue-500' : ''}>
            <Link to="/products" className="flex items-center gap-2">
              Products <img src={product_icon} alt="Products" className="w-5 h-5" />
            </Link>
          </li>
          <li className={location.pathname === '/cart' ? 'text-blue-500' : ''}>
            <Link to="/cart" className="flex items-center gap-2">
              Cart <img src={cart_icon} alt="Cart" className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <img src={profile_icon} alt="Profile" className="w-8 h-8" />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <HiOutlineMenu className="w-8 h-8 text-gray-700" onClick={handleMenuToggle} />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-end p-5 space-y-4 text-lg">
            <li>
              <Link to="/" onClick={handleMenuToggle} className={location.pathname === '/' ? 'text-blue-500' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={handleMenuToggle} className={location.pathname === '/products' ? 'text-blue-500' : ''}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" onClick={handleMenuToggle} className={location.pathname === '/cart' ? 'text-blue-500' : ''}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

