import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

export default function RelatedProducts() {
  return (
    <div className=' py-5 px-10'>
        <h1 className='texth1 text-4xl font-bold mb-8 mt-8 text-center'>Related Products</h1>
        <div className='item flex items-center justify-center flex-wrap gap-8'>
        {data_product.map((item,i)=>{
            return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
         })}
        </div>
    </div>
  )
}
