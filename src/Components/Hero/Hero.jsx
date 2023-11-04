import React from 'react';
import './hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_icon from '../Assets/hero_image.png'

export default function Hero() {
  return (
    <div className='hero flex pt-7 px-8 w-full  text-black'>
        <div className='left flex-1 flex flex-col justify-center gap-5 '>
         <h2 className=' font-semibold text-3xl mb-8 '>New Arrivals Only</h2>
         <div>
         <div className='hand-icon flex items-center'>
          <p className=' text-6xl font-bold text-red-600'>new</p>
          <img src={hand_icon} alt='' className=' h-20 w-20'/>
         </div>
         <p className=' font-bold text-6xl '>collection</p>
         <p className=' font-bold text-6xl '>for everyone</p>
         </div>
         <div className='hero_btn flex items-center p-2 rounded-2xl bg-red-600 w-56 cursor-pointer mt-8'>
            <div className=' mr-3 p-4 text-white font-semibold'>
                Latest Collection
            </div>
            <img src={arrow_icon} alt='' className=' h-4 w-4'/>
         </div>
        </div>
        <div className='right  md:flex items-center flex-1 justify-center hidden'>
        <img src={hero_icon} alt='' className='w-[413px] h-[642px]'/>
        </div>
    </div>
  )
}
