import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

export default function Breadcrums(props) {
 const {product}=props
  return (
    <div className='breadcrums flex py-3 items-center font-medium text-lg flex-wrap px-10'>
     Home <img src={arrow_icon} alt='' className=' h-4 w-4'/> Shop <img src={arrow_icon} alt='' className=' h-4 w-4'/> {product.category} <img src={arrow_icon} alt='' className=' h-4 w-4'/> {product.name}
    </div>
  )
}


