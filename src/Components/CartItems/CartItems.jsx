import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export default function CartItems() {
    const {all_product,cartItems,removeFromcart,toTal}=useContext(ShopContext);
    return(
    <div className='father py-5 px-10  '>
        <div className='sheet main flex justify-between items-center py-4 '>
      <p >Products</p>
      <p >Title</p>
      <p >Price</p>
      <p >Quantity</p>
      <p >Total</p>
      <p className=' '>Remove</p>
        </div>
      {all_product.map((e)=>  {
          if(cartItems[e.id]>0){
            return   (<div key={e.id} className='  '>
            <div className='format flex justify-between items-center border-t-[1px] border-solid border-red-600 py-3'>
           <img src={e.image} alt='' className=' h-[62px]  '/>
           <p  className='name w-[150px] font-normal text-sm ml-[-60px] '>{e.name}</p>
           <p className=' ml-[-100px] '>{e.new_price}$</p>
           <button className=' '>{cartItems[e.id]}</button>
           <p className=' '>{e.new_price*cartItems[e.id]}$</p>
           <img src={remove_icon} onClick={()=> removeFromcart(e.id)} className='delet w-8 h-8 ' alt=''/>
            </div>
        </div>)
        }return null
      })}
      <hr className=' border-red-600'/>
      <div className='son1 flex justify-between items-center py-5 px-10'>
        <div className=' flex-[0.4]'>
          <h1 className=' text-2xl font-bold text-red-700 mb-5'>Cart Totals</h1>
          <div className='flex justify-between items-center py-3 px-2'>
            <p>Subtatal</p>
            <p>{toTal()}$</p>
          </div>
          <hr className=' border-red-600'/>
          <div className='flex justify-between items-center py-3 px-2'>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div> 
          <hr className=' border-red-600'/>
          <div className=' flex justify-between items-center py-3 px-2'>
            <h3>Total</h3>
            <h3>{toTal()}$</h3>
          </div>
          <hr className=' border-red-600'/>
          <button className=' mt-6 text-lg font-medium bg-red-600 hover:bg-red-700 py-3 px-5 text-white rounded'>Proceed To Checkout</button>
        </div>
        <div className='flex-[0.5] '>
          <p className=' mb-6'>If you have a promo code , Enter it here</p>
          <div className='flex items-center'>
  <input type='text' placeholder='Promo Code' className='w-1/2 border-2 border-red-700 p-2' />
  <button className='text-sm font-medium bg-red-600 hover:bg-red-700 text-white  py-3 px-4' >Submit</button>
</div>
        </div>
      </div>
    </div>
  )
}
