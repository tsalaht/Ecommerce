import React from 'react'
import './DescripotionBox.css'

export default function DescriptionBox() {
  return (
    <div className=' px-10 py-4'>
        <div className='navigator flex'>
            <div className='nav_box bg-red-600 text-white p-3 cursor-pointer'>Description</div>
             <div className='fade bg-red-700 text-white p-3 cursor-pointer'>Reviews (150)</div>
             </div>
             <div className='description py-8 border-2 border-solid border-red-700 px-4'>
                <p className=' mb-5'>E-commerce, short for electronic commerce,
                 is the buying and selling of goods and services over the internet.
                  It involves online transactions between businesses, consumers, or both.
                   E-commerce has become a prominent part of the modern economy, offering various methods for online shopping,
                    such as online storefronts,
                 electronic payment systems, and digital marketplaces.</p>
                 <p className=''>E-commerce includes a wide range of activities,
                  from online retail stores like Amazon and eBay to digital services like streaming platforms and software downloads.
                  It has revolutionized the way people shop and conduct business,
                   offering convenience, a broader range of products, and global accessibility.
                  E-commerce also encompasses mobile commerce (m-commerce)
                   for transactions made via mobile devices like smartphones and tablets.</p>
             </div>
        
    </div>
  )
}
