import hero_icon from '../../assets/hero_icon.svg';
import upArrow_icon from '../../assets/upArrow_icon.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-md md:p-10 p-5">
            <div className="flex md:flex-row flex-col justify-center items-center gap-5">
                {/* Left Part */}
                <div className="md:w-1/2 w-full text-center md:text-left" id="leftPart">
                    <h2 className="font-semibold md:text-7xl text-5xl text-white leading-tight drop-shadow-lg">Discover Our New Collection</h2>
                    <p className="font-light text-white mt-2 md:text-lg text-md drop-shadow-md">
                        Fashion is part of the daily air and it changes all the time, with all the events.
                    </p>
                    <Link to='/products'>
                        <button className="px-12 py-3 text-white font-semibold bg-yellow-400 hover:bg-yellow-300 mt-4 flex items-center justify-center gap-2 rounded-lg transition duration-300 shadow-md">
                            <span className='text-lg md:text-base'>Start Shopping</span>
                            <img src={upArrow_icon} alt="uparrow" className='w-4 h-4' />
                        </button>
                    </Link>
                    <ul className="flex flex-wrap justify-center md:justify-start gap-5 font-Poppins mt-5 text-white">
                        <li className='border-r-2 border-white pr-4 md:pr-6'>
                            <h3 className="font-bold md:text-4xl text-3xl">200+</h3>
                            <p className="font-light text-sm md:text-lg">Happy Customers</p>
                        </li>
                        <li className='border-r-2 border-white pr-4 md:pr-6'>
                            <h3 className="font-bold md:text-4xl text-3xl">1000+</h3>
                            <p className="font-light text-sm md:text-lg">Quality Products</p>
                        </li>
                        <li>
                            <h3 className="font-bold md:text-4xl text-3xl">100+</h3>
                            <p className="font-light text-sm md:text-lg">International Brands</p>
                        </li>
                    </ul>
                </div>
                
                {/* Right Part */}
                <div className="md:w-1/4 w-80 h-80 flex shrink-0 mt-5" id='rightPart'>
                    <img src={hero_icon} alt="hero_icon" className='w-full h-full object-contain shadow-lg' />
                </div>
            </div>
        </section>
    );
}

export default Hero;

