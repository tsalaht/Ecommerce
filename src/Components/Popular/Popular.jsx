import React from 'react'
import './popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

export const Popular = () => {
  return (
    <div className='popular w-full px-10 '>
        <h1 className='texth1 text-4xl font-bold mb-8 mt-8 text-center'>Popular In Women</h1>
        <div className='popular_item flex w-full justify-between flex-wrap'>
              {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              })

              }
        </div>
    </div>
  )
}
