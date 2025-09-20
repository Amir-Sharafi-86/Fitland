import React from 'react'
import ProdcutBanner from '../prodcutBanner/prodcutBanner'
import Link from 'next/link'
function BannerTwo() {
    return (
          <div className='relative mt-[80px] hidden xl:block'>

<div
  className="w-full  h-screen bg-[url('/images/main/bannerTwo.png')] bg-no-repeat  bg-contain"
/>


      <div className='absolute right-[10rem] text-2xl  top-[4rem] 2xl:top-[15.2rem]'>
      <span className='text-[#01070D]  font-MorabbaMedium inline-block mb-1.5'>برای لذت بردن از مسیر</span>
      <p className='text-2xl font-MorabbaBold text-[#01070D] '>دوچرخه، اسکیت و  اسکوتر بگیر</p>

      <Link 
            href={"/product"}
            className="text-white text-base max-sm:text-xs whitespace-nowrap max-sm:w-full py-2 px-6 font-MorabbaBold"
          >
        <button className="py-4 px-9 bg-midnight flex gap-x-4  cursor-pointer items-center rounded-md mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-white border border-white rounded-full p-0.5"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
            مشاهده محصولات
        </button>
          </Link>


      </div>


        </div>
    )
}

export default BannerTwo
