import React from 'react';
import { brandLogo } from '../../utils/brandLogo';
import { nanoid } from 'nanoid';
const Brandlogo = () => {
  return (
    <section className='mt-10 overflow-hidden whitespace-nowrap'>
        <ul className='flex gap-5 justify-center items-center animate-Move md:animate-Move-md'>
            {brandLogo.map((logo,index) => (<li key={nanoid()} className='flex shrink-0'><img src={logo} alt="logo" className='md:w-28 md:h-28 w-32 h-32 object-contain flex-grow'/></li>))}
        </ul>
    </section>
  )
}
export default Brandlogo;
// display the brand logo