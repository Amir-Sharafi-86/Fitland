import React, { useState } from 'react';

function FooterContent() {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [isToggleTwo, setIsToggleTwo] = useState<boolean>(false);
  const [isToggleTree, setIsToggleTree] = useState<boolean>(false);

  const showBodyAccordion = () => {
    setIsToggle(!isToggle);
  };

  const showBodyAccordion2 = () => {
    setIsToggleTwo(!isToggleTwo);
  };

  const showBodyAccordion3 = () => {
    setIsToggleTree(!isToggleTree);
  };

  return (
    <>
      <div className="container">
        <div className="top-wrapper flex justify-center lg:justify-between items-start pb-20 max-sm:pb-10">
          <div className="parent-item flex max-lg:hidden gap-x-20">
            <ul className="text-gray-main flex flex-col space-y-3.5">
              <h1 className="mb-5 text-white">محبوب‌ترین‌ها</h1>
              <li><a href="">لباس مردانه</a></li>
              <li><a href="">کفش فوتبال</a></li>
              <li><a href="">دوچرخه</a></li>
              <li><a href="">لباس زنانه</a></li>
            </ul>
            <ul className="text-gray-main flex flex-col space-y-3.5">
              <h1 className="mb-5 text-white">محبوب‌ترین‌ها</h1>
              <li><a href="">لباس مردانه</a></li>
              <li><a href="">کفش فوتبال</a></li>
              <li><a href="">دوچرخه</a></li>
              <li><a href="">لباس زنانه</a></li>
            </ul>
            <ul className="text-gray-main flex flex-col space-y-3.5">
              <h1 className="mb-5 text-white">محبوب‌ترین‌ها</h1>
              <li><a href="">لباس مردانه</a></li>
              <li><a href="">کفش فوتبال</a></li>
              <li><a href="">دوچرخه</a></li>
              <li><a href="">لباس زنانه</a></li>
            </ul>
            <ul className="text-gray-main flex flex-col space-y-3.5">
              <h1 className="mb-5 text-white">محبوب‌ترین‌ها</h1>
              <li><a href="">لباس مردانه</a></li>
              <li><a href="">کفش فوتبال</a></li>
              <li><a href="">دوچرخه</a></li>
              <li><a href="">لباس زنانه</a></li>
            </ul>
          </div>

          <div className="parent-content">
            <h1 className="text-white text-sm font-MorabbaBold text-center">
              برای دریافت تخفیف های بیشتر ما را دنبال کنید!
            </h1>
            <div className="flex-center gap-x-11.5 mt-4 max-lg:mb-9">
              {/* SVG Icons */}
            </div>

            <div className='max-xs:-ml-3'>
              <h1 className="text-white text-sm font-MorabbaBold mt-6 mb-2">
                خبرنامه فیت‌لند
              </h1>
              <div className="relative w-full border border-[#868686] rounded-lg flex gap-x-2 items-center p-2">
                {/* SVG Icon */}
                <input
                  type="text"
                  className="text-white w-full placeholder:text-[#868686] placeholder:text-xs outline-none text-sm font-MorabbaBold"
                  placeholder="ایمیل خود را وارد کنید..."
                />
                <button
                  type="submit"
                  className="bg-orange-noraml cursor-pointer py-[5px] px-[13px] text-white rounded-sm font-MorabbaMedium text-sm"
                >
                  ثبت
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wrapper */}
        <div className="bottom-wrapper block max-sm:hidden">
          <div className="flex justify-between items-start max-lg:justify-center max-lg:flex-wrap max-lg:mb-24 mb-12">
            <div className="about">
              <h1 className="mb-4 text-sm text-white font-MorabbaBold">
                فروشگاه اینترنتی فیت‌لند
              </h1>
              <p className="max-w-[650px] text-[#F9F9F9] text-xs font-MorabbaBold leading-[1.9] max-lg:mb-8">
              فروشگاه لوازم ورزشی فیت‌لند در سال 1403 کار خود را به صورت حرفه ای آغاز کرد و با هدف ارائه جدیدترین محصولات ورزشی از قبیل لوازم فوتبال، فوتسال، والیبال، بسکتبال، تنیس و... همچنین پوشاک ورزشی و تجهیزات سفر، از برند های معتبر دنیا در محیطی کاربرپسند، قابل اطمینان و با مجربترین مشاوران و کارشناسان ورزشی فعالیت می کند. فروشگاه فیت‌لند دارای نماد اعتماد از وزارت صنعت معدن و تجارت می باشد و تمامی محصولات خود را با 7 روز ضمانت بازگشت همراه با گارانتی اصالت و سلامت فیزیکی، با سریع ترین روش های ارسال به سراسر ایران در اختیار مشتریان خود قرار می دهد.
              </p>
            </div>
            <div className="icon flex flex-col items-center">
              <div className="flex gap-x-6">
                <img src="./images/footer/01.png" alt="" />
                <img src="./images/footer/01.png" alt="" />
                <img src="./images/footer/01.png" alt="" />
              </div>
              <p className="text-[#F9F9F9] text-xs font-MorabbaBold mt-6" style={{ wordSpacing: '3px' }}>
                یک هفته ضمانت بازگشت ✍
              </p>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="wrapper-acc mb-10">
          <div className="bottom-wrapper__mobile--acordion hidden max-sm:block">
            <div className="header flex justify-between items-end w-[80%] max-xs:w-[88%]">
              <span className="text-[#EDEDED] text-sm font-MorabbaMedium max-xl:mr-[3rem] sm:mr-[5rem]">راهنمای خرید</span>
              <button className="border cursor-pointer border-[#EDEDED] rounded-full p-0.5" onClick={showBodyAccordion}>
                {/* SVG Arrow */}
                {isToggle === false ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

                )  : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 text-white rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                )}
              </button>
            </div>
            <div className="body-accordion transition-all ">
              <p className={`text-white mb-4 mt-4 w-[75%]  mx-auto ${isToggle ? 'block' : 'hidden'}`}>
                برای خرید با کیفیت و بهتر با پشتیبان ما در ارتباط باشید
              </p>
            </div>
          </div>

          <div className="bottom-wrapper__mobile--acordion hidden max-sm:block my-6">
            <div className="header flex justify-between items-end w-[80%] max-xs:w-[88%]">
              <span className="text-[#EDEDED] text-sm font-MorabbaMedium max-xl:mr-[3rem] sm:mr-[5rem]">محبوب‌ترین‌ها</span>
              <button className="border cursor-pointer border-[#EDEDED] rounded-full p-0.5" onClick={showBodyAccordion2}>
             {/* SVG Arrow */}
             {isToggleTwo === false ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

                )  : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 text-white rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                )}

              </button>
            </div>
            <div className="body-accordion transition-all ">
              <p className={`text-white mb-4 mt-4 w-[75%]  mx-auto ${isToggleTwo ? 'block' : 'hidden'}`}>
                برای خرید با کیفیت و بهتر با پشتیبان ما در ارتباط باشید
              </p>
            </div>
          </div>

          <div className="bottom-wrapper__mobile--acordion hidden max-sm:block">
            <div className="header flex justify-between items-end w-[80%] max-xs:w-[88%]">
              <span className="text-[#EDEDED] text-sm font-MorabbaMedium max-xl:mr-[3rem] sm:mr-[5rem]">اطلاعات تماس</span>
              <button className="border cursor-pointer border-[#EDEDED] rounded-full p-0.5" onClick={showBodyAccordion3}>
                   {/* SVG Arrow */}
                   {isToggleTree === false ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

                )  : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 text-white rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                )}
              </button>
            </div>
            <div className="body-accordion transition-all ">
              <p className={`text-white mb-4 mt-4 w-[75%]  mx-auto ${isToggleTree ? 'block' : 'hidden'}`}>
                برای خرید با کیفیت و بهتر با پشتیبان ما در ارتباط باشید
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Text */}
        <div className="content__text lg:hidden mr-[3rem] max-w-[79%] text-white">
        فروشگاه لوازم ورزشی فیت‌لند در سال 1403 کار خود را به صورت حرفه ای آغاز کرد و با هدف ارائه جدیدترین محصولات ورزشی از قبیل لوازم فوتبال، فوتسال، والیبال، بسکتبال، تنیس و... همچنین پوشاک ورزشی و تجهیزات سفر، از برند های معتبر دنیا در محیطی کاربرپسند، قابل اطمینان و با مجربترین مشاوران و کارشناسان ورزشی فعالیت می کند. فروشگاه فیت‌لند دارای نماد اعتماد از وزارت صنعت معدن و تجارت می باشد و تمامی محصولات خود را با 7 روز ضمانت بازگشت همراه با گارانتی اصالت و سلامت فیزیکی، با سریع ترین روش های ارسال به سراسر ایران در اختیار مشتریان خود قرار می دهد.
        </div>

        <div className="icon hidden flex-col items-center max-sm:flex mt-10">
          <div className="flex gap-x-6">
            <img src="./images/footer/01.png" alt="" />
            <img src="./images/footer/01.png" alt="" />
            <img src="./images/footer/01.png" alt="" />
          </div>
          <p className="text-[#F9F9F9] text-xs font-MorabbaBold mt-6" style={{ wordSpacing: '3px' }}>
            یک هفته ضمانت بازگشت ✍
          </p>
        </div>

        {/* Developer Section */}
        <div>
          <div className="developer py-4 max-sm:flex-col max-sm:gap-y-6 flex justify-between items-center max-sm:mt-10">
            <div className="flex gap-x-2 items-end">
              {/* SVG Shield */}
              <p className="text-[#ADADAD] text-[10px] font-MorabbaBold">
                تمامی حقوق مادی و معنوی این وب‌سایت برای مجموعه فیت‌لند محفوظ می‌باشد.
              </p>
            </div>
            <div className="flex gap-x-2 items-end">
              {/* SVG Logo */}
              <p className="text-[#ADADAD] text-xs font-MorabbaBold">
                طراحی شده توسط <span className="text-orange-noraml mr-1">امیر محمد شرفی نیک</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterContent;
