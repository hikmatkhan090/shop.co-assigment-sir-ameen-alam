"use client"

import { SheetSide } from '@/components/mysheet';
import { NavigationMenuDemo } from '@/components/NavigationMenuDemo';
import Link from 'next/link'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";


const Header = () => {
  return (
    
    <div className='flex justify-between items-center w-full h-[48px] px-5 max-w-screen-2xl mx-auto '>
      <div className='justify-center items-center flex'>
        <SheetSide/>
        <h1 className='flex   text-xl sm:text-3xl text-[#000000] font-extrabold pl-4 '>SHOP.CO</h1>
      </div>
      {/* links */}
      <ul className='hidden sm:block'>
        <li className='space-x-5  flex items-center'>
       
        
        <Link href={""} className='font-[16px]  text-sm'><NavigationMenuDemo/></Link>
        <Link href={"/"}>On Sale</Link>
        <Link href={"/products"}>New Arrivals</Link>
        <Link href={""}>Brands</Link>
        </li>
      </ul>

      {/* search bar */}
      
        <div className='hidden md:block'>
        <div className='flex justify-start items-center bg-[#F0F0F0] mt-2 w-[557px] h-[42px] rounded-[62px]   '>
        <CiSearch className='text-xl ml-2 ' />
        <input placeholder='Search for products...' className=' w-full h-full outline-none text-[#00000066] ml-2  rounded-[62px] bg-[#F0F0F0]  '></input>
        </div>
        </div>

        <div className='flex items-center mr-7  space-x-5'>
        <CiSearch className='text-xl ml-2 md:hidden' />
        <Link href={"/cart"}>
        <FaShoppingCart className='w-[25px] h-[24px]' />
        </Link>
        <MdAccountCircle className='w-[25px] h-[24px]' />
        </div>
      </div>
    
    
  )
}

export default Header


 