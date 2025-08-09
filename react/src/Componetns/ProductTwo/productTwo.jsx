import React from 'react'
import ProductDetailsTwo from '../productDetailsTwo/productDetailsTwo'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
function ProductTwo() {
    return (
      
        <div className='w-full bg-[#FFF7F4] py-20 '>
  <h1 className='text-[32px] text-[#021526] text-center mb-8 font-MorabbaBold'>تخفیفات ویژه</h1>
  <div className='container mx-auto flex justify-between items-center gap-9'>

    <ProductDetailsTwo
     title = "سویشرت نایک مدل AO-14" 
     price = "۳۰۰,۰۰۰ تومان"  
     size= "از سایز L تا XXL"
     img = "/public/images/main/prodcuttwos.png"
    />
    <ProductDetailsTwo
     title = "ست نایک مدل S-2000" 
     price = "۳۰۰,۰۰۰ تومان"  
     size= "از سایز L تا XXL"
     img = "/public/images/main/prodcuttwos.png"
     className = "hidden md:block"
    />
    <ProductDetailsTwo
     title = "کفش نایک مدل S-2000" 
     price = "۲۰۰۰۰۰ تومان"  
     size= "از سایز L تا XXL"
     img = "/public/images/main/prodcuttwos.png"

    />
  </div>
</div>

    )
}

export default ProductTwo
