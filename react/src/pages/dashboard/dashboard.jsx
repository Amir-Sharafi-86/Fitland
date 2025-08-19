import React from 'react'
import Header from '../../Componetns/Header/header'

function Dashboard() {
    return (
        <>
            <Header></Header>

            <main className='max-w-[1440px] mx-auto'>
                <div className="container">
                    <div className="grid grid-cols-12 mt-10">
                        <div className='sidebar bg-white px-8 py-12  mx-auto col-span-3'>
                                <div className="user-profile   flex flex-col justify-center items-center   rounded-tr-2xl rounded-tl-2xl gap-y-2">
                                    <img src="./public/images/main/userProfile.png" className='size-25' alt="" />
                                    <span className='text-xs font-MorabbaMedium'>مهسا شیرین زبان</span>
                                    <span className='font-MorabbaMedium'>mahsashirinzaban751@gmail.com</span>
                                </div>

                                <div className='mt-12'>
                                    <ul className='flex flex-col gap-y-5'>
                                    <a href="" className='text-[#194165] flex gap-x-2 items-center font-MorabbaMedium'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                           </svg>
                                           حساب کاربری
                                            </a>
                                            <a href="" className='text-[#194165] flex gap-x-2 items-center font-MorabbaMedium'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

                                           تاریخچه سفارشات
                                            </a>
                                            <a href="" className='text-[#194165] flex gap-x-2 items-center font-MorabbaMedium'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

                                           علاقه مندی ها
                                            </a>
                                            
                                    </ul>
                                </div>
                        </div>

                        {/* //!Content User  */}
                        <div className='col-span-9'></div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Dashboard
