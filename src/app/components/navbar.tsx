import React from 'react'
import { FaPlus } from "react-icons/fa6";

const Navbar = () => {
  return (
    <main className='bg-[#000000]  w-full h-[38px] flex  items-center relative justify-center px-5 max-w-screen-2xl mx-auto'>
      <div className='flex justify-center items-center'>
        <h3 className=' text-white text-xs  sm:text-sm'>Sign up and get 20% off to your first order. </h3>
        
      </div>
      <button className=' text-white text-xs sm:text-sm ml-3'>Sign Up Now</button>
      <FaPlus className=' text-white hidden sm:block absolute right-[50px] ]'/>
    
    </main>
  )
}

export default Navbar

