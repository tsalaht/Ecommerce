import React from 'react'
import './Newsletter.css'
export default function Newsletter() {
  return (
    <div className='newletter px-10 flex flex-col items-center justify-center py-6'>
        <h1 className='texth1 mb-5  text-4xl font-bold  text-center'>Get Exclusive On Your Email</h1>
        <p className=' font-medium text-lg mb-10 mt-4'>Subscribe To Owr Newletter And Stay Updated</p>
        <div className='box'>
            <input type='email' placeholder='Your Email' className=' w-64 p-2 '/>
            <button >Subscribe</button>
        </div>
    </div>
  )
}
