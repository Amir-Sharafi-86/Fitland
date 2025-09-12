"use client"
import React from 'react'
import Header from "@/Components/Header/header"
import { useState } from 'react'

import BoxComment from '@/Components/boxCommnet/boxComment'
import ProdcutsDetailsTree from '@/Components/ProdcutsDetailsTree/ProdcutsDetailsTree'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import  TopFooter from "@/Components/topFooter/topFooter"
import 'swiper/css/navigation';
import Footer from '@/Components/Footer/footer'

function Detailsprodcut() {
    const [isActive , setIsActive ] = useState(false)
    
    
    return (
        <>
            <Header></Header>
            
            <main className='max-w-[1440px] mx-auto'>
                <div className="container">
                    <div className="flex max-lg:flex-wrap max-lg:justify-center max-lg:items-center  mt-12">
                        {/* //? img right  */} 
                        <div className='lg:w-1/2'>
                              <img src="/images/main/detailsImg.jpg" className='rounded-md' alt="" />
                        </div>

                        <div className='lg:w-1/2 left-content max-lg:mt-8'>
                            <div className="main__content">
                                <div className="header mb-4">
                                    <span className='text-[#000306] font-MorabbaMedium mb-2 text-[28px]'>KD17</span>
                                    <span className='text-[#868686] text-sm block'>کفش بسکتبال</span>
                                </div>
                                <div>
                                    <span className='text-[32px] text-midnight font-MorabbaBold  mb-4 inline-block'>۶۰۰,۰۰۰ تومان</span>
                                    <div className='flex-justify max-w-[192px]'>
                                        <span className='text-[#ADADAD] text-2xl line-through '>1,200,000 </span>
                                        <span className='block bg-orange-noraml py-2 px-4 text-white rounded-md text-center '>50%</span>
                                    </div>

                                    <div className='size mt-4 relative'>
                                        <div className="header flex-justify cursor-pointer w-[242px] " >
                                            <span className='text-lg md:text-xl lg:text-2xl text-black-mainTwo font-MorabbaMedium'>سایز</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                            onClick={() => setIsActive(!isActive)}
                                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-[#ADADAD]">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

                                        </div>

                                            {isActive  && (
                                                <div className='flex items-center gap-x-2  mt-4 absolute '>
                                                    <button className='bg-[#EDEDED] rounded-sm text-xs py-1 px-8 text-black-mainTwo'>39</button>
                                                    <button className='bg-[#EDEDED] rounded-sm text-xs py-1 px-8 text-black-mainTwo'>39</button>
                                                    <button className='bg-[#EDEDED] rounded-sm text-xs py-1 px-8 text-black-mainTwo'>39</button>
                                                </div>
                                            )}

                                    </div>

                                    <div className='mt-15 block '>
                                        <h1 className='text-black-mainTwo text-lg lg:text-2xl font-MorabbaMedium'>رنگ</h1>

                                        <div className='flex   items-center mt-3'>

                                            <div className='inline-flex  gap-x-1 px-1.5 py-1 items-center bg-[#EDEDED] rounded-sm '>
                                                <span className='bg-[#C4A97C] size-6 rounded-full block '></span>
                                                <span className='text-[#404040]   color-elem block   rounded-sm text-xs'>
                                                    خاکی
                                                </span>
                                            </div>
                                            <div className='inline-flex  gap-x-1 px-1.5 py-1 items-center mx-4 bg-[#EDEDED] rounded-sm '>
                                                <span className='bg-[#C4A97C] size-6 rounded-full block '></span>
                                                <span className='text-[#404040]   color-elem block   rounded-sm text-xs'>
                                                    خاکی
                                                </span>
                                            </div>
                                            <div className='inline-flex  gap-x-1 px-1.5 py-1 items-center bg-[#EDEDED] rounded-sm  '>
                                                <span className='bg-[#C4A97C] size-6 rounded-full block '></span>
                                                <span className='text-[#404040]   color-elem block   rounded-sm text-xs'>
                                                    خاکی
                                                </span>
                                            </div>

                                        </div>

                                            

                                    </div>

                                    <div className='mt-5  justify-between max-lg:gap-x-5 hidden lg:flex'>
                                            <button className='border-2 flex-center text-orange-noraml border-orange-noraml px-8 h-14 rounded-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-orange-noraml">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
                                                <h1 className='font-MorabbaMedium'>1</h1>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-orange-noraml">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>


                                            </button>

                                            <button className='bg-orange-noraml flex-center text-white gap-x-2 font-MorabbaMedium w-1/2 rounded-md '>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
                                            افزودن به سبد خرید

                                            </button>

                                        <div className='text-[#2F5F8A] flex gap-x-4 items-end'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

                                        </div>
                                    </div>

                                    <div className='lg:hidden mt-10 flex items-center justify-between'>
                                    <button className='border-2 flex-center text-orange-noraml border-orange-noraml py-2 px-12  rounded-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-orange-noraml">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
                                                <h1 className='font-MorabbaMedium'>1</h1>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-orange-noraml">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>


                                            </button>
                                            <div className='text-[#2F5F8A] flex gap-x-4 items-end'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

                                        </div>
                                    </div>
                                    <div className='lg:hidden mt-4'>
                                        <button className='bg-orange-noraml flex-center text-white gap-x-2 font-MorabbaMedium w-full py-2 px-4 rounded-md'>افزودن به سبد خرید</button>
                                    </div>


                                </div>
                            </div>
                        </div>


                       
                    </div>

                    <div className="feature mb-8">
                            <ul className='text-[#194165] text-2xl max-sm:text-base gap-x-4.5 mb-8 flex mt-20  items-center font-MorabbaMedium'>
                                <li className='bg-[#CFE8FF] px-2.5 py-1.5 rounded-sm'>
                                    <a href="" >ویژگی های محصول</a>
                                </li>
                                <li>
                                    <a href="">توضیحات </a>
                                </li>
                                <li>
                                    <a href="">نظرات </a>
                                </li>
                            </ul>

                            <div className="box__feature border border-[#CBCBCB] py-6 px-4 rounded-lg text-[#000000] text-base md:text-xl">
                                    <div className="item flex justify-between max-w-[294px] mb-6  ">
                                        <span className=''>جنس</span>
                                        <span>چرم مصنوعی</span>
                                    </div>
                                    <div className='border-b  border-[#CBCBCB]'></div>
                                    <div className="item flex justify-between max-w-[294px] mb-6 mt-6">
                                        <span className=''>جنس زیره</span>
                                        <span>ترموپلاستیک پلی اورتان</span>
                                    </div>
                                    <div className='border-b  border-[#CBCBCB]'></div>
                                    <div className="item flex justify-between max-w-[294px] mb-6 mt-6">
                                        <span className=''>ویژگی کفی کفش</span>
                                        <span>طبی قابل تعویض</span>
                                    </div>
                                    <div className='border-b  border-[#CBCBCB]'></div>
                                    <div className="item flex justify-between max-w-[294px] mt-6">
                                        <span className='l'>جنس</span>
                                        <span>چرم مصنوعی</span>
                                    </div>
                            </div>
                        </div>

                        <div className='paragraph   p-8 text-black-mainTwo leading-6 font-MorabbaMedium border border-[#CBCBCB] mb-8 rounded-lg'>
                        یکی از دلایلی که باعث شده نایک به انتخاب اول تمامی ورزشکار های دنیا تبدیل شود. تکنولوژی ها و ویژگی های پیشرفته ای است که نایکی در تولید کفش های خود از آن بهره میبرد. کفش های نایک علاوه بر داشتن تکنولوژی هایی مانند Nike Air, Zoomx, Nike React و … دارای برخی ویژگی ها مثل وزن سبک، انعطاف پذیری بالا، تنفس پذیری و قابلیت تهویه هوا، بازگشت انرژی و راحتی فوق العاده است که در ادامه به آنها میپردازیم.
                        اما توجه داشته باشید که تنها کفش های نایک اصل دارای چنین مشخصاتی هستند و کفش های کپی، های کپی، کوالی مستر و … فاقد هر گونه تکنولوژی و فناوری هستند و تنها ظاهر نمونه اورجینال کفش را تولید میکنند. اگر قصد خرید کفش نایک اصل را دارید یا میخواهید از اصل بودن کفش نایک خود مطمئن شوید توصیه میکنیم مقاله تشخیص کفش نایک اصل را مطالعه کنید.
                        </div>

                        <div className="wrapper__comment grid md:grid-cols-12 gap-x-6">
                            <div className="commnnet__b space-y-3  col-span-12  max-md:mx-auto md:col-span-8 ">
                                <BoxComment></BoxComment>
                                <BoxComment></BoxComment>
                                <BoxComment></BoxComment>
                                <BoxComment></BoxComment>
                            </div>

                            <div className=' col-span-12 max-md:mt-10 md:col-span-4'>
                            <div>
                                <h6 className='text-[#000306] text-lg max-sm:text-xs font-MorabbaBold'>نظرت رو برامون بنویس</h6>
                                <div className='border border-[#CBCBCB] my-3'></div>
                                <span className='text-[#868686] text-sm'>ایمیل شما نشان داده نمی‌شود.</span>
                            </div>

                            <div className=''>
                                <label htmlFor="" className='mb-2 inline-block' >نام </label>
                                <input type="text" className='border border-[#ADADAD] w-full rounded-lg p-[9.7px]' name="" id="" />
                                <label htmlFor="" className='mb-2 inline-block'>ایمیل  </label>
                                <input type="text" className='border border-[#ADADAD] w-full mb-8  rounded-lg p-[9.7px]'  name="" id="" />

                                <textarea name="" className='w-full pr-2 pt-2 pb-22 border border-[#ADADAD]'  placeholder='نظر خود را بنویسید ' id=""></textarea>
                                
                            </div>
                                        <div className='flex-center '>
                                            
                                            <button type='submit' className='border-2 cursor-pointer border-orange-noraml text-center font-MorabbaMedium text-orange-noraml py-2 px-8 rounded-sm   '>ثبت نظر و امتیاز</button>
                                        </div>
                            </div>
                        </div>

                

                </div>
            </main>
                            <div className='my-[80px] max-md:hidden'>
                                <TopFooter />
                            </div>

                            <div className='max-md:mt-[140px]'>
                                <Footer />
                            </div>

           

        </>
    )
}

export default Detailsprodcut
