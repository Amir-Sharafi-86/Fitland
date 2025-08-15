import React, { useState } from 'react';

function BannerTree() {
  const [isStyle] =  useState(true);

  return (
    <div className="relative mt-[80px] hidden xl:block">
      <div
        className="w-full h-screen bg-[url('/images/main/bannerTree.png')] bg-no-repeat bg-contain"
      />

      <div className={`absolute right-[10rem] text-2xl top-[4rem] ${isStyle ? '2xl:top-[7.2rem] right-[15rem]'  : ''}`}>
        <span className="text-2xl font-MorabbaBold block max-w-[409px] text-white">
          بزودی کامل ترین مجموعه از لوازم کمپ در فیت لند
        </span>
        <span className="text-white font-MorabbaMedium inline-block mb-1.5">
          از سفر لذت ببر
        </span>
        {/* <button className="py-2 px-6 bg-midnight flex items-center rounded-md mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white border border-white rounded-full p-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          <a href="#" className="text-white text-base max-sm:text-xs whitespace-nowrap max-sm:w-full py-2 px-6 font-MorabbaBold">
            مشاهده محصولات
          </a>
        </button> */}
      </div>
    </div>
  );
}

export default BannerTree;
