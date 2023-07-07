"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MobileMenu } from './MobileMenu'
export const Nav = () => {
  const [open,setOpen]=useState(false)
  return (
    <nav className="px-4 md:px-16 py-8 flex justify-between">
    <Link href={'/'}>
     <Image className='' src="./logo.svg" width={150} height={150} alt="logo" />
    </Link>
    {/* <button>
    <Image src={'/hamburger.svg'} width={50} height={50} alt='menu' className='cursor-pointer'></Image>
    </button> */}
    <div id="nav-icon3" className={`block md:hidden ${open && 'open'}`} onClick={()=>setOpen(!open)}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
    <ul className='text-[#400E03] hidden md:flex gap-8 text-[14px] uppercase  font-semibold'>
      <li><Link className='drop-shadow-md' href={''}>Show  Tyres</Link></li>
      <li><Link className='drop-shadow-md' href={''}>Find a Dealer</Link></li>
      <li><Link className='drop-shadow-md' href={''}>Guides & Videos</Link></li>
      <li><Link className='drop-shadow-md' href={''}>Go with</Link></li>
      <li><Link className='drop-shadow-md' href={''}>Service & Help</Link></li>
    </ul>
{open && <MobileMenu/>}
 </nav>
  )
}
