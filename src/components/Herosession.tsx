import Image from 'next/image'
import React from 'react'

const Herosession = () => {
  return (
    <div className='px-5 max-w-screen-2xl mx-auto w-full h-full md:h-[500px] flex-col md:flex-row items-startstart flex justify-between bg-[#F2F0F1] mt-3 '>
      {/* Left side */}
      <div className='w-full md:w-[500px] mt-3  md:mt-10 md:ml-10 pl-3 '>
        <h1 className='md:text-5xl text-2xl font-extrabold '>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className=' text-sm md:mt-3 font-16px'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className='bg-black py-2 px-8 text-sm text-white rounded-[16px] mt-4 '>Shop Now</button>
      </div>

      {/* Right side */}
      <div className='relative ' >
        <Image src="/heroprofile.jpeg" className='w-[500px] mr-4' width={200} height={200} alt="heroprofile" />
         
         {/* hero star */}
         <Image src="/herostar.png" className='w-[50px] md:w-[100px]    left-8 absolute top-[100px]  md:top-[300px] md:left-[-100px] mr-4' width={200} height={200} alt="heroprofile" />

         <Image src="/herostar.png" className=' w-[60px] md:w-[104px] md:h-[104px] mr-4 absolute top-5 right-[20px] md:top-[50px] md:right-[5px]' width={200} height={200} alt="heroprofile" />         
      </div>

    </div>
  )
}

export default Herosession
