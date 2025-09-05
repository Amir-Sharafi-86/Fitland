import React from 'react'
import { Link } from 'react-router-dom'

function EditInfo () {
    return (
                       

        <div className='lg:col-span-8  '>
        <div className="header--user__name">
            <span className='text-[#01070D] text-2xl font-MorabbaBold mb-7 block'>حساب کاربری</span>
        </div>

        <div className='box-infos  border border-[#CBCBCB] p-6 rounded-2xl max-sm:h-[466px]'>
                <div className="wrapper__one flex justify-between items-center   ">
                    <div className="item-one flex flex-col gap-y-2 font-MorabbaMedium ">
                        <span className='text-[#606060] text-xl  '>نام و نام خانوادگی</span>
                        <span className=' text-base text-[#000000]'>مهسا شیرین زبان</span>
                    </div>
                    <div className="item-one flex flex-col gap-y-2 font-MorabbaMedium max-md:hidden ">
                        <span className='text-[#606060] text-xl '>شماره تلفن</span>
                        <span className=' text-base text-[#000000]'>09037447009</span>
                    </div>

                    <div className="item-one flex flex-col gap-y-2 font-MorabbaMedium ">
                    <Link to={`/my-account/EditInfo`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                    </Link>

                    </div>
                </div>
                <div className="wrapper__one max-md:items-start flex justify-between items-center mt-10 w-[55%] max-sm:flex-col ">
                    <div className="item-one flex flex-col gap-y-2 font-MorabbaMedium ">
                        <span className='text-[#606060] text-xl '>کد ملی</span>
                        <span className=' text-base text-[#000000]'>07822347</span>
                    </div>
                    <div className="item-one flex flex-col gap-y-2 font-MorabbaMedium  max-md:hidden">
                        <span className='text-[#606060] text-xl '>جنسیت</span>
                        <span className=' text-base text-[#000000]'>زن</span>
                    </div>
                </div>
                <div className="wrapper__one flex justify-between max-md:items-start items-center mt-10 w-[55%] max-sm:flex-col  md:hidden  ">
                <div className="item-one flex flex-col gap-y-2 font-MorabbaMedium   ">
                        <span className='text-[#606060] text-xl '>شماره تلفن</span>
                        <span className=' text-base text-[#000000]'>09037447009</span>
                    </div>
                </div>
                <div className="wrapper__one flex justify-start mt-10 w-[55%] ">
                    <div className="item-one flex flex-col gap-y-2 font-MorabbaMedium ">
                        <span className='text-[#606060] text-xl '>ایمیل</span>
                        <span className=' text-base text-[#000000]'>mahsashirinzaban751@gmail.com</span>
                    </div>
                
                </div>
        </div>

    </div>
    )
}

export default EditInfo 
