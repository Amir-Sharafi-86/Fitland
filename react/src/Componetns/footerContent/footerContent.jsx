import React from 'react'
import { useState } from 'react'

function FooterContent() {

    const [isToggle  , setIsToggle ] = useState(false)
    const [isToggleTwo  , setIsToggleTwo ] = useState(false)
    const [isToggleTree  , setIsToggleTree ] = useState(false)

    const showBodyAccordion = async () => {
          setIsToggle(!isToggle)
    }
    const showBodyAccordion2 = async () => {
          setIsToggleTwo(!isToggleTwo)
    }
    const showBodyAccordion3 = async () => {
          setIsToggleTree(!isToggleTree)
    }

    return (
        <>
         <div className="container">
         <div className="top-wrapper flex justify-center lg:justify-between items-start pb-20 max-sm:pb-10">
            <div className="parent-item flex  max-lg:hidden gap-x-20">
            <ul className='text-gray-main  flex flex-col space-y-3.5'>
                <h1 className='mb-5 text-white'>محبوب‌ترین‌ها</h1>
                <li>
                    <a href="">لباس مردانه</a>
                </li>
                <li>
                    <a href="">کفش فوتبال</a>
                </li>
                <li>
                    <a href="">دوچرخه</a>
                </li>
                <li>
                    <a href="">لباس زنانه</a>
                </li>
            </ul>
            <ul className='text-gray-main  flex flex-col space-y-3.5'>
                <h1 className='mb-5 text-white'>محبوب‌ترین‌ها</h1>
                <li>
                    <a href="">لباس مردانه</a>
                </li>
                <li>
                    <a href="">کفش فوتبال</a>
                </li>
                <li>
                    <a href="">دوچرخه</a>
                </li>
                <li>
                    <a href="">لباس زنانه</a>
                </li>
            </ul>
            <ul className='text-gray-main  flex flex-col space-y-3.5'>
                <h1 className='mb-5 text-white'>محبوب‌ترین‌ها</h1>
                <li>
                    <a href="">لباس مردانه</a>
                </li>
                <li>
                    <a href="">کفش فوتبال</a>
                </li>
                <li>
                    <a href="">دوچرخه</a>
                </li>
                <li>
                    <a href="">لباس زنانه</a>
                </li>
            </ul>
            <ul className='text-gray-main  flex flex-col space-y-3.5'>
                <h1 className='mb-5 text-white'>محبوب‌ترین‌ها</h1>
                <li>
                    <a href="">لباس مردانه</a>
                </li>
                <li>
                    <a href="">کفش فوتبال</a>
                </li>
                <li>
                    <a href="">دوچرخه</a>
                </li>
                <li>
                    <a href="">لباس زنانه</a>
                </li>
            </ul>
            </div>
            <div className="parent-content">
                <h1 className='text-white text-sm font-MorabbaBold '>برای دریافت تخفیف های بیشتر ما را دنبال کنید!</h1>
                <div className='flex-center gap-x-11.5 mt-4 max-lg:mb-9'>
                <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="none"
    viewBox="0 0 26 19"
  >
    <path
      fill="#fff"
      d="M25.711 5.244c-.157-1.576-.5-3.315-1.757-4.23-.976-.71-2.256-.736-3.452-.735L12.92.286 5.625.294c-1.016 0-2.003-.08-2.946.37-.81.388-1.444 1.124-1.824 1.944C.325 3.748.213 5.04.15 6.302c-.118 2.296-.105 4.6.037 6.894.102 1.676.364 3.526 1.625 4.594 1.118.946 2.696.992 4.145.994l13.806.011c.59 0 1.206-.01 1.807-.078 1.184-.13 2.311-.479 3.072-1.378.767-.907.963-2.172 1.08-3.367.284-2.9.28-5.83-.01-8.728m-15.454 8.36V5.471l6.86 4.066z"
    ></path>
                 </svg> 
                 <svg
    xmlns="http://www.w3.org/2000/svg"
       width="30"
    height="30"
    fill="none"
    viewBox="0 0 27 27"
  >
    <path
      fill="#fff"
      d="M17.711 19.457c-5.181-.001-9.397-4.218-9.398-9.398a2.387 2.387 0 0 1 2.776-2.347q.423.07.794.285c.035.02.06.055.065.095l.547 3.452a.13.13 0 0 1-.032.11 2.37 2.37 0 0 1-1.117.697l-.206.059.078.2a7 7 0 0 0 3.944 3.943l.2.079.057-.208c.121-.43.362-.815.697-1.117a.13.13 0 0 1 .112-.032l3.45.547q.064.011.097.066a2.381 2.381 0 0 1-2.064 3.57z"
    ></path>
    <path
      fill="#fff"
      d="M26.9 12.4a12.7 12.7 0 0 0-4.074-8.245 12.7 12.7 0 0 0-8.63-3.37C7.166.785 1.444 6.507 1.444 13.54c0 2.36.65 4.659 1.883 6.662L.578 26.285l8.801-.938c1.53.627 3.151.945 4.818.945.439 0 .888-.023 1.338-.07.397-.042.798-.104 1.193-.184 5.89-1.19 10.189-6.417 10.222-12.432v-.067c0-.384-.017-.766-.052-1.137zM9.717 22.678l-4.87.518 1.455-3.221-.29-.39-.067-.09a10.1 10.1 0 0 1-1.93-5.957c0-5.614 4.568-10.18 10.182-10.18 5.26 0 9.716 4.103 10.146 9.34a10 10 0 0 1 .031 1.082 10.155 10.155 0 0 1-9.046 9.877 10.087 10.087 0 0 1-5.429-.889l-.185-.09z"
    ></path>
                  </svg>
                 <svg
    xmlns="http://www.w3.org/2000/svg"
       width="30"
    height="30"
    fill="none"
    viewBox="0 0 27 27"
  >
    <path
      fill="#fff"
      d="M17.711 19.457c-5.181-.001-9.397-4.218-9.398-9.398a2.387 2.387 0 0 1 2.776-2.347q.423.07.794.285c.035.02.06.055.065.095l.547 3.452a.13.13 0 0 1-.032.11 2.37 2.37 0 0 1-1.117.697l-.206.059.078.2a7 7 0 0 0 3.944 3.943l.2.079.057-.208c.121-.43.362-.815.697-1.117a.13.13 0 0 1 .112-.032l3.45.547q.064.011.097.066a2.381 2.381 0 0 1-2.064 3.57z"
    ></path>
    <path
      fill="#fff"
      d="M26.9 12.4a12.7 12.7 0 0 0-4.074-8.245 12.7 12.7 0 0 0-8.63-3.37C7.166.785 1.444 6.507 1.444 13.54c0 2.36.65 4.659 1.883 6.662L.578 26.285l8.801-.938c1.53.627 3.151.945 4.818.945.439 0 .888-.023 1.338-.07.397-.042.798-.104 1.193-.184 5.89-1.19 10.189-6.417 10.222-12.432v-.067c0-.384-.017-.766-.052-1.137zM9.717 22.678l-4.87.518 1.455-3.221-.29-.39-.067-.09a10.1 10.1 0 0 1-1.93-5.957c0-5.614 4.568-10.18 10.182-10.18 5.26 0 9.716 4.103 10.146 9.34a10 10 0 0 1 .031 1.082 10.155 10.155 0 0 1-9.046 9.877 10.087 10.087 0 0 1-5.429-.889l-.185-.09z"
    ></path>
                  </svg>
                 <svg
    xmlns="http://www.w3.org/2000/svg"
       width="30"
    height="30"
    fill="none"
    viewBox="0 0 27 27"
  >
    <path
      fill="#fff"
      d="M17.711 19.457c-5.181-.001-9.397-4.218-9.398-9.398a2.387 2.387 0 0 1 2.776-2.347q.423.07.794.285c.035.02.06.055.065.095l.547 3.452a.13.13 0 0 1-.032.11 2.37 2.37 0 0 1-1.117.697l-.206.059.078.2a7 7 0 0 0 3.944 3.943l.2.079.057-.208c.121-.43.362-.815.697-1.117a.13.13 0 0 1 .112-.032l3.45.547q.064.011.097.066a2.381 2.381 0 0 1-2.064 3.57z"
    ></path>
    <path
      fill="#fff"
      d="M26.9 12.4a12.7 12.7 0 0 0-4.074-8.245 12.7 12.7 0 0 0-8.63-3.37C7.166.785 1.444 6.507 1.444 13.54c0 2.36.65 4.659 1.883 6.662L.578 26.285l8.801-.938c1.53.627 3.151.945 4.818.945.439 0 .888-.023 1.338-.07.397-.042.798-.104 1.193-.184 5.89-1.19 10.189-6.417 10.222-12.432v-.067c0-.384-.017-.766-.052-1.137zM9.717 22.678l-4.87.518 1.455-3.221-.29-.39-.067-.09a10.1 10.1 0 0 1-1.93-5.957c0-5.614 4.568-10.18 10.182-10.18 5.26 0 9.716 4.103 10.146 9.34a10 10 0 0 1 .031 1.082 10.155 10.155 0 0 1-9.046 9.877 10.087 10.087 0 0 1-5.429-.889l-.185-.09z"
    ></path>
                  </svg>
                </div>

                <div>
                    <h1 className='text-white text-sm  font-MorabbaBold mt-6 mb-2'>خبرنامه فیت‌لند</h1>
                    <div className='relative w-full border  border-[#868686] rounded-lg flex  gap-x-2 items-center p-2'>
                        <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="18"
    fill="none"
    viewBox="0 0 17 18"
    className='right-3'
  >
    <path
      fill="#868686"
      d="M12.04 15.124H4.955c-2.586 0-4.073-1.488-4.073-4.073V6.092c0-2.585 1.487-4.072 4.073-4.072h7.083c2.585 0 4.073 1.487 4.073 4.072v4.959c0 2.585-1.487 4.073-4.073 4.073M4.955 3.082c-2.026 0-3.01.985-3.01 3.01v4.959c0 2.026.984 3.01 3.01 3.01h7.083c2.026 0 3.01-.984 3.01-3.01V6.092c0-2.025-.984-3.01-3.01-3.01z"
    ></path>
    <path
      fill="#868686"
      d="M8.325 8.308c-.595 0-1.197-.184-1.658-.56L4.45 5.978a.53.53 0 0 1 .659-.83L7.326 6.92c.538.432 1.452.432 1.99 0l2.218-1.771a.523.523 0 0 1 .743.085.523.523 0 0 1-.085.743L9.975 7.748c-.453.376-1.055.56-1.65.56"
    ></path>
                          </svg>
                        <input type="text" name=""  className=' text-white w-full placeholder:text-[#868686] placeholder:text-xs outline-none text-sm font-MorabbaBold' placeholder='ایمیل خود را وارد کنید...'   id="" />
                        <button type='submit' className='bg-orange-noraml cursor-pointer py-[5px] px-[13px] text-white rounded-sm font-MorabbaMedium text-sm'>ثبت</button>
                    </div>
                </div>
            </div>
         </div>

         <div className="bottom-wrapper block max-sm:hidden ">
            <div className='flex justify-between items-start max-lg:justify-center max-lg:flex-wrap max-lg:mb-24 mb-12'>

            <div className="about">
                <h1 className='mb-4 text-sm text-white font-MorabbaBold'>فروشگاه اینترنتی فیت‌لند</h1>
                <p className='max-w-[650px] text-[#F9F9F9] text-xs font-MorabbaBold leading-[1.7] max-lg:mb-8'>فروشگاه لوازم ورزشی فیت‌لند در سال 1403 کار خود را به صورت حرفه ای آغاز کرد و با هدف ارائه جدیدترین محصولات ورزشی از قبیل لوازم فوتبال، فوتسال، والیبال، بسکتبال، تنیس و... همچنین پوشاک ورزشی و تجهیزات سفر، از برند های معتبر دنیا در محیطی کاربرپسند، قابل اطمینان و با مجربترین مشاوران و کارشناسان ورزشی فعالیت می کند. فروشگاه فیت‌لند دارای نماد اعتماد از وزارت صنعت معدن و تجارت می باشد و تمامی محصولات خود را با 7 روز ضمانت بازگشت همراه با گارانتی اصالت و سلامت فیزیکی، با سریع ترین روش های ارسال به سراسر ایران در اختیار مشتریان خود قرار می دهد.</p>
            </div>

            <div className="icon  flex flex-col items-center">
             <div className='flex gap-x-6'>
                <img src="./images/footer/01.png" alt="" />
                <img src="./images/footer/01.png" alt="" />
                <img src="./images/footer/01.png" alt="" />
            </div>
            <p className='text-[#F9F9F9] text-xs font-MorabbaBold mt-6 ' style={{wordSpacing : "3px"}}>یک هفته ضمانت بازگشت ✍</p>
            </div>
            </div>

         </div>
        <div className="wrapper-acc mb-10">
         <div className="bottom-wrapper__mobile--acordion hidden max-sm:block  ">
            <div className="header flex justify-between items-end w-[80%]">
                <span className='text-[#EDEDED] text-sm font-MorabbaMedium mr-[4rem] sm:mr-[5rem]'>راهنمای خرید</span>
                <button className='border cursor-pointer border-[#EDEDED] rounded-full p-0.5' onClick={showBodyAccordion}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  </svg>
  
                </button>

            </div>
            <div className="body-accordion transition-[10s] w-[80%] ">
                    <p className={`text-white mb-4 max-xs:mr-[50px] sm:mr-[57px] mr-[4rem] mt-4   ${isToggle === true ? `block` : `hidden`}`}>برای خرید با کیفیت و بهتر با پشتیبان ما در ارتباط باشید </p>
            </div>
         </div>
         <div className="bottom-wrapper__mobile--acordion hidden max-sm:block my-6 ">
            <div className="header flex justify-between items-end w-[80%]">
                <span className='text-[#EDEDED] text-sm font-MorabbaMedium mr-[4rem] sm:mr-[5rem]'>محبوب‌ترین‌ها</span>
                <button className='border cursor-pointer border-[#EDEDED] rounded-full p-0.5' onClick={showBodyAccordion2}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  </svg>
  
                </button>

            </div>
            <div className="body-accordion transition-[10s] w-[80% ] ">
                    <p className={`text-white mb-4 max-xs:mr-[50px] sm:mr-[57px] mr-[4rem]  mt-4  ${isToggleTwo === true ? `block` : `hidden`}`}>برای خرید با کیفیت و بهتر با پشتیبان ما در ارتباط باشید </p>
            </div>
         </div>
         <div className="bottom-wrapper__mobile--acordion hidden max-sm:block  ">
            <div className="header flex justify-between items-end w-[80%]">
                <span className='text-[#EDEDED] text-sm font-MorabbaMedium mr-[4rem] sm:mr-[5rem]'>اطلاعات تماس</span>
                <button className='border cursor-pointer border-[#EDEDED] rounded-full p-0.5' onClick={showBodyAccordion3}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  </svg>
  
                </button>

            </div>
            <div className="body-accordion transition-[10s] w-[80%] ">
                    <p className={`text-white mb-4 max-xs:mr-[50px] sm:mr-[57px] mr-[4rem] mt-4   ${isToggleTree === true ? `block` : `hidden`}`}>برای خرید با کیفیت و بهتر با پشتیبان ما در ارتباط باشید </p>
            </div>
         </div>
        </div>
         {/* <div className="bottom-wrapper__mobile--acordion hidden max-sm:block space-y-6 ">
            <div className="header flex justify-between items-end w-[80%]">
                <span className='text-[#EDEDED] text-sm font-MorabbaMedium mr-[4rem] sm:mr-[5rem]'>راهنمای خرید</span>
                <button className='border cursor-pointer border-[#EDEDED] rounded-full p-0.5' onClick={showBodyAccordion}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  </svg>
  
                </button>

            </div>
            <div className="body-accordion transition-[10s] w-[80%] ">
                    <p className={`text-white mb-4 max-xs:mr-[50px] sm:mr-[57px] mr-[4rem]  ${isToggle === true ? `block` : `hidden`}`}>برای خرید با کیفیت و بهتر با پشتیبان ما در ارتباط باشید </p>
            </div>
         </div> */}
         <div>
                 <div className="developer py-4 max-sm:flex-col max-sm:gap-y-6 flex justify-between items-center">
                    <div className='flex gap-x-2 items-end' >
                          <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      fill="#ADADAD"
      d="M7.002 13.272q-.211.001-.414-.059c-3.027-.834-5.22-3.663-5.22-6.731V3.92c0-.654.472-1.36 1.078-1.61L5.696.98a3.44 3.44 0 0 1 2.613 0l3.249 1.33c.607.25 1.08.956 1.08 1.61v2.56c0 3.063-2.2 5.892-5.222 6.732q-.203.06-.414.059m0-11.667q-.5 0-.974.192l-3.25 1.33c-.28.117-.536.496-.536.8v2.56c0 2.678 1.925 5.151 4.58 5.886a.64.64 0 0 0 .361 0c2.654-.735 4.58-3.208 4.58-5.886v-2.56c0-.304-.258-.683-.537-.8l-3.25-1.33a2.6 2.6 0 0 0-.974-.192"
    ></path>
    <path
      fill="#ADADAD"
      d="M7.003 7.73a1.603 1.603 0 1 1 0-3.209 1.603 1.603 0 1 1 0 3.209m0-2.334a.73.73 0 1 0 0 1.46.73.73 0 0 0 0-1.46"
    ></path>
    <path
      fill="#ADADAD"
      d="M7 9.479a.44.44 0 0 1-.437-.438v-1.75A.44.44 0 0 1 7 6.854a.44.44 0 0 1 .438.437v1.75A.44.44 0 0 1 7 9.479"
    ></path>
                          </svg>
                          <p className='text-[#ADADAD] text-[10px] font-MorabbaBold'>تمامی حقوق مادی و معنوی این وب‌سایت برای مجموعه فیت‌لند محفوظ می‌باشد.</p>
                    </div>
                    <div className='flex gap-x-2 items-end' >
                    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      fill="#ADADAD"
      d="M7.58 13.27H2.915c-1.412 0-2.187-.776-2.187-2.187V6.416c0-1.412.775-2.187 2.187-2.187h2.917a.44.44 0 0 1 .437.437v6.417c0 .921.391 1.312 1.313 1.312a.44.44 0 0 1 .437.438.44.44 0 0 1-.437.437M2.915 5.104c-.922 0-1.312.39-1.312 1.312v4.667c0 .921.39 1.312 1.312 1.312h2.8c-.21-.344-.32-.781-.32-1.312v-5.98z"
    ></path>
    <path
      fill="#ADADAD"
      d="M5.83 5.105H2.915a.44.44 0 0 1-.437-.438V3.501c0-.887.717-1.605 1.604-1.605h1.814a.44.44 0 0 1 .344.17c.082.11.11.25.076.379a1.8 1.8 0 0 0-.047.472v1.75a.44.44 0 0 1-.437.438M3.353 4.23h2.041V2.77H4.081a.73.73 0 0 0-.73.73zM8.164 8.02a.44.44 0 0 1-.437-.437V4.666a.44.44 0 0 1 .437-.437.44.44 0 0 1 .438.437v2.917a.44.44 0 0 1-.438.437M10.5 8.02a.44.44 0 0 1-.437-.437V4.666a.44.44 0 0 1 .437-.437.44.44 0 0 1 .438.437v2.917a.44.44 0 0 1-.438.437M10.497 13.27H8.164a.44.44 0 0 1-.437-.437v-2.334c0-.56.46-1.02 1.02-1.02h1.167c.56 0 1.02.46 1.02 1.02v2.334a.44.44 0 0 1-.437.437m-1.895-.875h1.458V10.5a.144.144 0 0 0-.146-.146H8.747a.144.144 0 0 0-.145.146zM3.5 10.355a.44.44 0 0 1-.437-.438V7.584a.44.44 0 0 1 .437-.438.44.44 0 0 1 .438.438v2.333a.44.44 0 0 1-.438.438"
    ></path>
    <path
      fill="#ADADAD"
      d="M11.086 13.27h-3.5c-1.412 0-2.188-.776-2.188-2.187V2.916c0-1.412.776-2.187 2.188-2.187h3.5c1.412 0 2.187.775 2.187 2.187v8.167c0 1.411-.775 2.187-2.187 2.187m-3.5-11.666c-.922 0-1.313.39-1.313 1.312v8.167c0 .921.391 1.312 1.313 1.312h3.5c.922 0 1.312-.39 1.312-1.312V2.916c0-.922-.39-1.312-1.312-1.312z"
    ></path>
  </svg>
                          <p className='text-[#ADADAD] text-xs font-MorabbaBold'>طراحی شده  توسط <span className='text-orange-noraml'>امیر محمد شرفی نیک</span></p>
                    </div>
                 </div>
            </div>
        </div>
        </>
    )
}

export default FooterContent
