import React, { ReactNode } from 'react'
type boxtypes = {
  title: string,
  children?: ReactNode
}
import Link from 'next/link'
export const Box = ({title,children}:boxtypes) => {
  return (
    <div className='px-3 py-4 bg-white text-[#400E03] mr-2 md:mr-8 border-b-red-400 border-b-4'>
      <h5 className='text-[20px]'>{title}</h5>
        {children}
        <div className='mt-8 flex gap-4'>
          <Link href={'/'} className='bg-[#FDE4E5] px-4 py-3 md:py-4 md:px-12 font-bold text-[8px] md:text-[12px] uppercase text-[#ED1C24]'>Learn More</Link>
          <Link href={'/'} className='bg-[#ED1C24] px-4 py-3 md:py-4 md:px-12 font-bold text-[8px] md:text-[12px] uppercase text-white '>Find a Dealer</Link>
        </div>
    </div>
  )
}
