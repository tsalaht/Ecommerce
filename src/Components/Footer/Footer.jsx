import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import {AiFillInstagram ,AiFillFacebook,AiFillLinkedin} from 'react-icons/ai'
export default function Footer() {
  return (
    <div className='footer w-full bg-red-600  ' >
   <div className='footer_container w-full  text-white flex justify-center items-center flex-col py-5 px-4'>
   <div className='logo_img flex items-center'>
  <img src={logo} alt=''/>
   <h1 className=' text-4xl font-bold ml-2'>Salah_Shop</h1>
   </div>
   <div className='list mb-3 mt-4 '>
  <ul className=' gap-8 flex'>
    <li className=' font-semibold text-base cursor-pointer'>Company</li>
    <li className=' font-semibold text-base cursor-pointer'>Products</li>
    <li className=' font-semibold text-base cursor-pointer'>Offices</li>
    <li className=' font-semibold text-base cursor-pointer'>About</li>
    <li className=' font-semibold text-base cursor-pointer'>Contact</li>
  </ul>
   </div>
   <div className='logos flex items-center justify-center gap-10 mt-3'>
    <AiFillInstagram size={35} className=' cursor-pointer'/>
    <AiFillFacebook size={35} className=' cursor-pointer'/>
    <AiFillLinkedin size={35} className=' cursor-pointer'/>
   </div>
   </div>
   <p className=' w-full text-center py-3 font-medium text-base text-white'>Copyright@2023| By Salah_eddine Tabet-All Rights Reserved</p>
    </div>
  )
}
