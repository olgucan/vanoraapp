
"use client"
import React from 'react'
import { Box } from './Box';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Featured = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
   
  };
  return (
    <section className='bg-[#F9F6F6] py-24'>
      <h2 className='text-[#400E03] font-bold ml-2 md:ml-0 md:text-center mb-16 text-[32px]'>Featured Products</h2>
      <Slider {...settings} className='md:px-32'>
       
          <Box title='ICEWAYS'>
              <p className='my-4 text-[12px] md:text-[14px]'>City life is changing. So are the habits of urban citizens. 4X4 cars 
                that were previously used only on challenging lands are now preferred for urban use.</p>
          </Box>
       
       
        <Box title='ICEWAYS'>
              <p className='my-4 text-[12px] md:text-[14px]'>City life is changing. So are the habits of urban citizens. 4X4 cars 
                that were previously used only on challenging lands are now preferred for urban use.</p>
          </Box>
        
       
        <Box title='ICEWAYS'>
              <p className='my-4 text-[12px] md:text-[14px]'>City life is changing. So are the habits of urban citizens. 4X4 cars 
                that were previously used only on challenging lands are now preferred for urban use.</p>
          </Box>
        
       
        <Box title='ICEWAYS'>
              <p className='my-4 text-[12px] md:text-[14px] '>City life is changing. So are the habits of urban citizens. 4X4 cars 
                that were previously used only on challenging lands are now preferred for urban use.</p>
          </Box>
        
       
        <Box title='ICEWAYS'>
              <p className='my-4 text-[12px] md:text-[14px]'>City life is changing. So are the habits of urban citizens. 4X4 cars 
                that were previously used only on challenging lands are now preferred for urban use.</p>
          </Box>
       
        
        <Box title='ICEWAYS'>
              <p className='my-4 text-[12px] md:text-[14px]'>City life is changing. So are the habits of urban citizens. 4X4 cars 
                that were previously used only on challenging lands are now preferred for urban use.</p>
          </Box>
       
      </Slider>
    </section>
  )
}
