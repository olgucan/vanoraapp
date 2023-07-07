import React from 'react'
import Link from 'next/link'
import { AiOutlineRight } from "react-icons/ai";

export const MobileMenu = () => {
  return (
    <div className='md:hidden z-10 fixed h-full left-0 top-24 w-full bg-[#400E03] text-white flex flex-col gap-4 px-4 py-8'>
        <Link href={'/'} className='flex w-full justify-between items-center border-b-2 border-gray-500 py-4'>
         <span> SHOW ALL TYRES</span>
         <span><AiOutlineRight/></span>
        </Link>
        <Link href={'/'} className='flex w-full justify-between items-center border-b-2 border-gray-500 py-4'>
         <span> FIND A DEALER</span>
         <span><AiOutlineRight/></span>
        </Link>
        <Link href={'/'} className='flex w-full justify-between items-center border-b-2 border-gray-500 py-4'>
         <span> GUIDES & VIDEOS</span>
         <span><AiOutlineRight/></span>
        </Link>
        <Link href={'/'} className='flex w-full justify-between items-center border-b-2 border-gray-500 py-4'>
         <span> GO WITH </span>
         <span><AiOutlineRight/></span>
        </Link>
        <Link href={'/'} className='flex w-full justify-between items-center border-b-2 border-gray-500 py-4'>
         <span> SERVICE & HELP</span>
         <span><AiOutlineRight/></span>
        </Link>
    </div>
  )
}
