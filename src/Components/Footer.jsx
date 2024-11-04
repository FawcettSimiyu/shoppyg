import React from 'react';
import { FaHeadphones, FaQuestionCircle, FaGift, FaFilm, FaMoneyBill, FaBriefcase, FaUserShield, FaLock, FaRegFileAlt, FaCookie, FaBuilding, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 p-10 border-t-2 border-gray-700">
            <h2 className="text-orange-500 text-2xl font-semibold mb-5 text-center">ShoppyGlobe</h2>
            <ul className='grid md:grid-cols-4 grid-cols-2 gap-5 mt-5 text-gray-400 cursor-pointer'>
                <li className='flex items-center hover:text-orange-400 transition duration-300'>
                    <FaHeadphones className='mr-2' />
                    Audio Description
                </li>
                <li className='flex items-center hover:text-orange-400 transition duration-300'>
                    <FaQuestionCircle className='mr-2' />
                    Help Center
                </li>
                <li className='flex items-center hover:text-orange-400 transition duration-300'>
                    <FaGift className='mr-2' />
                    Gift Cards
                </li>
                <li className='flex items-center hover:text-orange-400 transition duration-300'>
                    <FaFilm className='mr-2' />
                    Media Center
                </li>
                <li className='flex items-center hover:text-orange-400 transition duration-300'>
                    <FaMoneyBill className='mr-2' />
                    Investor Relations
                </li>
                <li className='flex items-center hover:text-orange-400 transition duration-300'>
                    <FaBriefcase className='mr-2' />
                    Jobs
                </li>
                <li className='flex items-center hover:text-orange-400 transition duration-300'>
                    <FaUserShield className='mr-2' />
                    Terms & Use
                </li>
                <li className='flex items-center hover:text-orange-400 transition duration-300'>
                    <FaLock className='mr-2' />
                    Privacy
                </li>
                <li className='flex items-center hover:text-orange-400 transition duration-300'>
                    <FaRegFileAlt className='mr-2' />
                    Legal Notices
                </li>
                <li className='flex items-center hover:text-orange-400 transition duration-300'>
                    <FaCookie className='mr-2' />
                    Cookie Preferences
                </li>
                <li className='flex items-center hover:text-orange-400 transition duration-300'>
                    <FaBuilding className='mr-2' />
                    Corporate Information
                </li>
                <li className='flex items-center hover:text-orange-400 transition duration-300'>
                    <FaEnvelope className='mr-2' />
                    Contact Us
                </li>
            </ul>
            <div className='mt-10 text-center text-gray-500 text-sm'>
                <p>&copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

