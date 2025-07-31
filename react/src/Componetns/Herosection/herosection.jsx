import React from 'react'

function Herosection() {
    return (
        <div>
            <div className="flex justify-between mt-5   ">
                <div className="right-content ">
                <span>راحت و مطمئن خرید کنید!</span>
                <span className='inline-block'>همراه تو در مسیر سلامتی</span>
                <p>سهم بزرگ خودتان را امروز بگیرید! </p>
                <span>بزرگترین حراج فصل فیت لند همین حالا شرع کن و محصولات با یه تخفیف شگفت انگیز بخر!</span>
                <button>
                    <a href="">مشاهده  محصولات</a>
                </button>
                </div>
                <div className='md : ml-[10rem]'>
                    <img src="/public/images/main/herosection.png" className='mx-auto' alt="" />
                </div>

                <div className="ml-[21px] space-y-6 mt-10">
                    <div className='wrraper flex gap-x-2 items-center '>
                        <button>
                                <img src="/public/images/main/calendar.png" alt="" />
                        </button>
                        <div>
                            <span className='inline-block'>+90</span>
                            <span className='inline-block mt-0'>رضایت مشتری</span>
                        </div>
                    </div>
                    <div className='wrraper flex gap-x-2 items-center'>
                        <button>
                                <img src="/public/images/main/calendar.png" alt="" />
                        </button>
                        <div>
                            <span className='inline-block'>+300</span>
                            <span className='inline-block mt-0'>رضایت مشتری</span>
                        </div>
                    </div>
                    <div className='wrraper flex gap-x-2 items-center'>
                        <button>
                                <img src="/public/images/main/calendar.png" alt="" />
                        </button>
                        <div>
                            <span className='inline-block'>+300</span>
                            <span className='inline-block mt-0'>رضایت مشتری</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection
