import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

export default function NewCollections() {
  return (
    <div className='new-collections popular w-full px-10'>
        <h1 className='texth1 text-4xl font-bold mb-8 mt-8 text-center'>New Collections</h1>
        <div className='collections popular_item flex w-full justify-between flex-wrap'>
         {new_collections.map((item,i)=>{
            return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
         })}
        </div>
    </div>
  )
}
