import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

export default function Item(props) {
  return (
    <div className='item w-[300px] ease-in hover:scale-[1.05] mb-7 mt-7'>
      <Link to={`/product/${props.id}`}> <img onClick={ window.scrollTo(0,0)} src={props.image} alt='' className=' rounded-xl shadow-md mb-5'/></Link> 
        <p className=' font-medium  text-lg '>{props.name}</p>
        <div className='item_prices flex gap-5 items-center'>
        <div className='item_price_new text-red-600 font-bold text-xl'>
             {props.new_price}$
        </div>
        <div className='item_price_old line-through decoration-red-500 decoration-2 text-lg text-[#5f5e5ec6] '>
             {props.old_price}$
        </div>
        </div>
        
    </div>
  )
}
