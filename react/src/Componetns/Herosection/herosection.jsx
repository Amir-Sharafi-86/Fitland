import React from 'react'

function Herosection() {
    return (
        <>
            <div>
            <div className="grid grid-cols-12 justify-between  mt-0 max-md:mt-12 max-md:items-center md:mt-12    ">
                <div className="right-content font-MorabbaBold col-span-6  md:col-span-5 mx-auto  mr-8 ">
                <div className='flex  flex-col'>
                    <span className='inline-block text-[#606060] text-base max-sm:text-xs'>راحت و مطمئن خرید کنید!</span>
                    <span className='inline-block text-midnight text-lg my-4 md:text-3xl '>همراه تو در مسیر سلامتی</span>
                </div>
                <p className='text-orange-noraml  mb-4 text-lg md:text-3xl'>سهم بزرگ خودتان را امروز بگیرید! </p>
                <span className='text-[#606060] text-base max-sm:text-xs block max-w-[440px]'>بزرگترین حراج فصل فیت لند همین حالا شرع کن و محصولات با یه تخفیف شگفت انگیز بخر!</span>
                <button className='py-2 px-6 bg-midnight flex gap-x-2  items-center  rounded-md mt-4' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white border border-white rounded-full p-0.5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
                    <a href=""
                    className='text-white text-base max-sm:text-xs whitespace-nowrap max-sm:w-full'
                    >مشاهده  محصولات</a>

                </button>
                </div>
                <div className='md :ml-[10rem]  col-span-6 md:col-span-4 mx-auto'>
                    <img src="/public/images/main/herosection.png" className='mx-auto' alt="" />
                    
                </div>

                <div className="space-y-6 mt-10 col-span-3 mx-auto md:ml-4 hidden md:block">
                    <div className='wrraper flex gap-5 items-center '>
                        <button className=' bg-[#EBF5FF] rounded-2xl p-5'>
                                <img src="/public/images/main/calendar.png" alt="" />
                        </button>
                        <div className='flex flex-col whitespace-nowrap '>
                            <span className='inline-block text-2xl'>+90</span>
                            <span className='inline-block mt-0'>رضایت مشتری</span>
                        </div>
                    </div>
                    <div className='wrraper flex gap-5 items-center'>
                        <button className='bg-[#EBF5FF] rounded-2xl p-5'>
                                <img src="/public/images/main/calendar.png" alt="" />
                        </button>
                        <div className='flex flex-col whitespace-nowrap '>
                            <span className='inline-block text-[#194165] text-2xl'>+300</span>
                            <span className='inline-block mt-0 text-[#404040]'>رضایت مشتری</span>
                        </div>
                    </div>
                    <div className='wrraper flex gap-5 items-center'>
                        <button className='bg-[#EBF5FF] rounded-2xl p-5'>
                                <img src="/public/images/main/calendar.png" alt="" />
                        </button>
                        <div className='flex flex-col whitespace-nowrap '>
                            <span className='inline-block text-2xl'>+300</span>
                            <span className='inline-block mt-0'>رضایت مشتری</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Herosection
