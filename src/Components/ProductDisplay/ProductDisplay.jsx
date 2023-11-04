import React, { useContext } from 'react';
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

export default function ProductDisplay(props) {
    const {product} = props
    const {addTocart}= useContext(ShopContext)
  return (
    <div className=' display flex py-4 px-10  items-center flex-wrap justify-around '>
    <div className='pd-left flex items-center mr-6  flex-1 '>
    <div className='img_list flex flex-col gap-3 flex-wrap '>
     <img src={product.image} alt='' className=' w-[120px] h-[120px]'/>
     <img src={product.image} alt='' className=' w-[120px] h-[120px]'/>
     <img src={product.image} alt='' className=' w-[120px] h-[120px]'/>
     <img src={product.image} alt='' className=' w-[120px] h-[120px]'/>
    </div>
    <div className='img-e ml-3'>
    <img src={product.image} alt='' className=' h-[516px] w-[420px]'/>
    </div>
     
    </div>
    <div className='pd-right flex-1 flex flex-col flex-wrap '>
  <h1 className=' font-bold text-3xl mb-5'>{product.name}</h1>
  <div className='right_img flex items-center mb-3'>
  <img src={star_icon} className=' w-4 h-4' alt=''/>
  <img src={star_icon} className=' w-4 h-4' alt=''/>
  <img src={star_icon} className=' w-4 h-4' alt=''/>
  <img src={star_icon} className=' w-4 h-4' alt=''/>
  <img src={star_dull_icon} className=' w-4 h-4' alt=''/>
  <p className=' ml-2'>(150)</p>
  </div>
  <div className='prices flex items-center mb-4'>
  <div className='new   text-red-600 font-bold text-3xl mr-5'>
        {product.new_price}$
    </div>
    <div className='old line-through decoration-red-500 decoration-2 text-lg text-[#5f5e5ec6]'>
   {product.old_price}$
    </div>
    
  </div>
  <div className='desrciption mb-4'>
  A classic wardrobe staple, the T-shirt is a versatile and comfortable piece of clothing.
   Typically made from soft and breathable cotton, it features short sleeves and a round neckline.
    T-shirts come in various colors and often feature printed designs, logos, or patterns on the front.
  </div>
  <div className='size mb-4'>
    <h1 className=' mb-2 text-lg font-medium'>Select Size</h1>
    <div className='sizes flex'>
        <div className='hover:bg-red-700 px-2 py-1 mx-1 bg-red-600 border-solid text-white cursor-pointer'>S</div>
        <div className='hover:bg-red-700 px-2 py-1 mx-1 bg-red-600 border-solid text-white cursor-pointer'>M</div>
        <div className='hover:bg-red-700 px-2 py-1 mx-1 bg-red-600 border-solid text-white cursor-pointer'>L</div>
        <div className='hover:bg-red-700 px-2 py-1 mx-1 bg-red-600 border-solid text-white cursor-pointer'>XL</div>
        <div className='hover:bg-red-700 px-2 py-1 mx-1 bg-red-600 border-solid text-white cursor-pointer'>XXL</div>
    </div>
  </div>
  <button onClick={()=>{addTocart(product.id)} } className=' px-4 py-3 bg-red-600 text-white hover:bg-red-700 font-medium rounded mb-4 w-32'>Add To Cart</button>
  <p><span className=' text-lg font-medium'>Category :</span> Women , T-Shirt , Crop Top</p>
  <p><span className=' text-lg font-medium'>Tags :</span>Modren , Latest</p>
    </div>
    </div>
  )
}
