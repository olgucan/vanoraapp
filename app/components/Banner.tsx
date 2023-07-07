import React from 'react'
import { Button } from './Button'
import Image from 'next/image'
export const Banner = () => {
  return (
    <div className="banner h-[480px] w-full relative  flex justify-center items-center" 
    >
      <Image  layout="fill" className='hidden md:block absolute inset-0   object-contain md:object-fill ' alt='banner' src={'/banner.png'}></Image>
      <Image layout='fill' className='absolute inset-0 block md:hidden' alt='mobilebg' src={'/mobilebg.png'}></Image>
        <div className=' px-4 z-[5] flex flex-col md:justify-center md:items-center md:w-1/3'> 
        <h1 className='text-center md:text-center text-[38px] md:text-[56px] text-white font-bold'>
        Nothing Can Stop You
       </h1>
       <Button mobileHidden={false} lgHidden={false}>
        Find Out More
       </Button>
        </div>
      
    </div>
  )
}


// 
// style={{background:'url("/background.png") ,url("/banner.png") 40% 40%'
//     ,backgroundSize:"cover",backgroundRepeat:"no-repeat",objectFit:"cover"
//     }}
//