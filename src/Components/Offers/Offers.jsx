import React from 'react'
import './offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
export default function Offers() {
  return (
    <div className='offers flex gap-5 px-10 items-center py-6 my-6 '>
        <div className='hero_left flex-1'>
       <h1 className=' font-bold text-6xl text-red-600'>Exclusive</h1>
       <h1 className=' font-bold text-6xl mb-6'>Offers For You</h1>
       <p className=' font-medium text-lg'>Only On Best Sellers Products</p>
       <button className='p-2 rounded-2xl bg-red-600 w-40 cursor-pointer mt-8 text-white font-semibold'>Check Now</button>
        </div>
        <div className='hero_right md:flex items-center justify-center flex-1 hidden'>
         <img src={exclusive_image} alt=''/>
        </div>
    </div>
  )
}
