import hero_icon from '../../assets/hero_icon.svg';
import upArrow_icon from '../../assets/upArrow_icon.svg';
import {Link} from 'react-router-dom';
const Hero = () => {
    return (
        <section className='bg-bgBanner rounded-md md:p-10 p-5'>
            <div className="flex md:flex-row flex-col justify-center items-center gap-5">
                <div className='md:w-1/2 w-full' id="leftPart">
                    <h2 className="font-semibold md:text-7xl text-4xl text-white">Discover new Collection</h2>
                    <p className="font-light text-white mt-1">Fashion is part of the daily air and it changes all the time, with all the events.</p>
                    <Link to='/products'><button className="px-12 md:py-2 py-3 text-white font-normal bg-Vermillion mt-4 flex items-center gap-5"><h2 className='text-sm'>Start shopping</h2> <img src={upArrow_icon} alt="uparrow" className='w-3 h-3' /></button></Link>
                    <ul className="flex gap-5 font-Poppins mt-5 text-white">
                        <li className='border-r-2 border-white pr-2'><h3 className="font-bold md:text-3xl text-lg">200+</h3><p className="font-light text-medium md:text-lg text-sm">happy Customer</p></li>
                        <li className='border-r-2 border-white pr-3'><h3 className="font-bold md:text-3xl text-lg">1000+</h3><p className="font-light text-medium md:text-lg text-sm">Quality products</p></li>
                        <li><h3 className="font-bold md:text-3xl text-xl">100+</h3><p className="font-light text-medium md:text-lg text-sm">international brands</p></li>
                    </ul>
                </div>
                <div className='md:w-1/4 md:h-1/4 w-80 h-80 flex shrink-0 mt-5' id='rightPart'>
                    <img src={hero_icon} alt="hero_icon" className='w-full h-full' />
                </div>
            </div>
            
        </section>
    )
}

export default Hero;
// this is the hero section with welcome message