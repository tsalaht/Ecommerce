import React from 'react'

export default function LoginSingup() {
  return (
    <div className='loginsingup w-full h-screen bg-[#ff0000] flex justify-center items-center px-10 '>
    <div className='container w-[480px] text-black bg-white h-[450px] p-4'>
     <h1 className=' text-2xl font-bold'>Sing Up</h1>
     <div className='fildes flex flex-col mt-6'>
      <input type='text' placeholder='Your Name' className=' pl-3 py-3 border-[#ff0000] border-2 mb-5'/>
      <input type='email' placeholder='Your email' className=' pl-3 py-3 border-[#ff0000] border-2 mb-5'/>
      <input type='password' placeholder='Password' className=' pl-3 py-3 border-[#ff0000] border-2 mb-5'/>
     </div>
     <button className=' w-[100%] bg-[#ff0000] text-white py-3 text-lg mb-5'>Continue</button>
     <p className=' cursor-pointer '> Alredy have an account? <span className=' text-[#ff0000] cursor-pointer '>Login here</span></p>
     <div className='agree flex items-center '>
      <input className='checkbox h-4 w-4 mr-2' type='checkbox' name='' id=''  />
      <p>By continuing , I agree to the terms  of use & privacy policy.</p>
     </div>
    </div>
    
    </div>
  )
}
