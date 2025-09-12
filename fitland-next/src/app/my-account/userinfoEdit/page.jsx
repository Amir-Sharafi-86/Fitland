import React from 'react'
import SideBar from "@/Components/sideBar/sidebarU"
import Header from '@/Components/Header/header'
function Page() {
    return (
        <>
         <Header />
          <main className='max-w-[1440px] mx-auto md:min-h-screen '>
                <div className="container lg:grid  max-lg:flex max-lg:gap-y-12 max-lg:mb-9 mb-0 max-lg:flex-wrap max-lg:justify-center max-lg:items-center lg:grid-cols-12 sm:mt-10">
                        <SideBar />
                        <div className='lg:col-span-8 max-sm:hidden'>
                            <div className="header--user__name">
                                <span className='text-[#01070D] text-2xl font-MorabbaBold mb-7 block'>حساب کاربری</span>
                            </div>

                            <div className='box-infos border border-[#CBCBCB] p-6 rounded-2xl'>
                                    <div className="grid grid-cols-2 gap-6">
                                    <input type="text" placeholder='نام و نام خوانوادگی' className='w-full p-3 border border-[#194165] rounded-lg' />
                                    <input type="text" placeholder='کد ملی' className='w-full p-3 border border-[#194165] rounded-lg' />
                                    <input type="phone" placeholder='شماره تماس' className='w-full p-3 border border-[#194165] rounded-lg' />
                                    <input type="text" placeholder='جنسیت' className='w-full p-3 border border-[#194165] rounded-lg' />
                                    <input type="email" placeholder='ایمیل' className='w-full p-3 border border-[#194165] rounded-lg' />
                                    <button className='btn-orange text-white'>ثبت</button>
                                    </div>
                            </div>

                        </div>
                </div>
            </main>


            
        
        </>
    )
}

export default Page
