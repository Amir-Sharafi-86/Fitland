"use client"
import React from 'react'
import NavMenu from '../Nav-menu/navMenu'
import { useState } from 'react'
import Overlay from '../overlay/overlay'
import Link from 'next/link'
function Navbar() {
  const [isShow , setIsShow ] = useState(false)
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  function showMenuMobile () {
    setIsShow(!isShow)
    
  }

  function showBasket () {
      setIsBasketOpen(!isBasketOpen)
  }

  return (
    <>
  
      <div className="container px-6 pt-4 mx-auto lg:pt-9 header max-w-[1440px] hidden md:block">
        <div className="wrapper-navbar flex justify-between items-center gap-4 relative" >

          <div className="flex items-center gap-2 flex-col">
            <img src="/images/header/logo.png" alt="" />
            <h6 className="text-sm text-[#868686] font-MorabbaBold whitespace-nowrap">فروشگاه لوازم ورزشی فیت‌لند</h6>
          </div>

          <div className="w-[340px] sm:w-[400px] lg:w-[600px] xl:max-w-[700px]">
            <form action="">
              <div className="relative w-full border border-[#CBCBCB] bg-[#F9F9F9] rounded-2xl">
                
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FA541C]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#FA541C"
                    d="M11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25S5.85 1.25 11.5 1.25s10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25m0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75M21.998 22.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
                  ></path>
                </svg>
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2   bg-transparent outline-none placeholder:text-[#868686] font-MorabbaMedium"
                  placeholder="جستجو"
                />
              </div>
            </form>
          </div>


          <div className="shrink-0 flex gap-x-4">
            <button className="bg-[#FFFFFF] flex flex-center gap-x-1.5 shadow-helper-class rounded-xl p-2.5">
              <Link href={"/register"}>
                <span className="text-[#404040] cursor-pointer text-sm md:text-base font-MorabbaBold">ثبت‌ نام | ورود</span>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </button>

                <div className=''>
                  
                 <button className="bg-orange-noraml p-3 relative rounded-xl z-999 cursor-pointer" onClick={showBasket}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <div className="absolute -top-1 -left-1 flex-center text-[10px] size-4 rounded-full bg-midnight text-white">0</div>
                 </button>

                 {/*//? basket  */}
                  {isBasketOpen === true && (
                      <div className="basket absolute top-full left-0 z-999  ">
              <div className="w-80 xs:w-[362px] bg-white dark:bg-darker rounded-lg">
          <div className="flex items-center font-MorabbaMedium justify-between px-5 py-4 bg-sky-50 dark:bg-sky-500/10 text-sky-500 mb-5 rounded-t-2xl">
              <span className="">سبد خرید من</span>
              <span className="font-danaDemiBold text-slate-500">1 دوره</span>
          </div>
                <div className="cart-body pl-5 pr-2.5 mr-2.5 space-y-4 max-h-62 overflow-y-auto direction-ltr child:direction-rtl">
                            <div className="cart-item flex items-center gap-x-3">
                          <a href="https://sabzlearn.ir/course/game-dev-js/" className="shrink-0">
                              <img src="/images/main/shoesMain.png" className='h-15 aspect-video' alt="" />
                              {/* <img className=" h-15 aspect-video rounded-lg" src="https://sabzlearn.ir/wp-content/uploads/2024/11/game-js-1-300x169.webp" alt="بازی سازی تحت وب با JS"`/> */}
                          </a>
                          <div className="flex flex-col justify-between font-MorabbaBold">
                              <a href="https://sabzlearn.ir/course/game-dev-js/" className="line-clamp-2 font-danaMedium text-sm">
                    بازی سازی تحت وب با JS                        </a>
                              <div className="flex items-center gap-x-2 text-slate-500 dark:text-gray-400">
                                                                    <div className="flex items-center gap-x-1">
                                          <span className="font-danaMedium text-sm">
                                              1,200,000 <span className="font-danaMedium text-xs mt-[7.5px] inline-block outline-black">تومان</span>                                    </span>
                                      </div>
                                            </div>
                          </div>
                                              <button className="text-gray-400 hover:text-red-500 mr-auto" onClick={showBasket}>
                              <svg className="size-4 transition-colors">
                                  <use href="#trash"></use>
                              </svg>
                          </button>
                                          </div>
                    </div>
                  <div className="mt-5 px-5 pb-5">
                  <div className="flex items-center justify-between border-t font-MorabbaMedium border-neutral-200 dark:border-white/10 pt-4 mb-5">
                      <span>مبلغ قابل پرداخت:</span>
                      <div className="flex items-center gap-x-1">
                          <span className="text-lg font-danaDemiBold">
                              1,200,000 <span className="font-danaMedium text-base ">تومان</span>                    </span>
                      </div>
                  </div>
                  <a href="https://sabzlearn.ir/cart" class="btn-orange font-MorabbaBold text-white">مشاهده سبد خرید</a>
              </div>
        </div>
                      </div>
                  )}
            
                </div>

          </div>

          

        </div>

        <NavMenu />
      </div>

      {/* //? header menuMobile  */}

                  
      <div className="mobile-menu p-6 block md:hidden">
        <div className="flex justify-between items-center">
          <img src="/images/header/logo.png" className="w-[90px]" alt="" />
          <button className='cursor-pointer' onClick={showMenuMobile}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
          </button>
        </div>

        <div className="w-full sm:w-[400px] lg:w-[600px] xl:max-w-[700px] mx-auto mt-4">
          <form action="">
            <div className="relative w-full border border-[#CBCBCB] bg-[#F9F9F9] rounded-2xl">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FA541C]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FA541C"
                  d="M11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25S5.85 1.25 11.5 1.25s10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25m0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75M21.998 22.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
                ></path>
              </svg>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 bg-transparent outline-none placeholder:text-[#868686] font-MorabbaMedium"
                placeholder="جستجو"
              />
            </div>
          </form>
        </div>
      </div>

     


      {/* //? header menuMobile  Main */}

      <div className={`${isShow === true ? `flex`  : `hidden`} md:hidden items-center gap-2 font-MorabbaBold transition-all   
      
      bg-whtie py-5 text-caption flex-col`}>
                
                <a href="#" className="w-full text-center py-2 hover:bg-gray-100 rounded">خانه</a>
                <button className="w-full text-center py-2 hover:bg-gray-100 rounded">خدمات</button>
                <button className="w-full text-center py-2 hover:bg-gray-100 rounded">مشاورین</button>
                <button className="w-full text-center py-2 hover:bg-gray-100 rounded">سوالات متداول</button>
                
    </div>
                  
{isShow && <Overlay onClick={() => setIsShow(false)} />}
{isBasketOpen && <Overlay onClick={() => setIsBasketOpen(false)} />}

    </>
  )
}

export default Navbar
