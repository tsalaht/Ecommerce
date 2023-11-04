import React, {  useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import drobdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';


export default function ShopCategory(props) {
  const {all_product} = useContext(ShopContext)
  return (

    <div className='shopcategory w-full '>
     <img src={props.banner} alt='' className=' w-full'/>
     <div className='shopcategory_indexSort flex items-center justify-between px-10 mt-5 '>
      <p>
        <span className=' text-red-600 text-xl font-medium mr-2'>Showing 1-12</span> Out Of 32 Products
      </p>
      <div className='shopcategory_sort flex border-2 rounded-2xl bg-white p-2 items-center cursor-pointer border-red-600'>
      <p className=' mr-3'>Sort By</p>
        <img src={drobdown_icon} alt='' className=' w-3 h-3'/>
      </div>
     </div>
     <div className='shopcategory_products flex w-full justify-between flex-wrap gap-10 px-10'>
       {
        all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          } else return null
        })
       }
     </div>
     <div className=' my-5 py-9 w-full flex justify-center'>
          <button className=' text-white bg-red-600 hover:bg-red-700 py-2 px-3 rounded-3xl  text-lg font-medium'>Explore More</button>
        </div>
     
    </div>
  )
}

