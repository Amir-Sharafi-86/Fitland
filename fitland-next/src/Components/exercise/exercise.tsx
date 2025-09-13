import React from 'react'
import ExerciseDetails from '../exerciseDetails/exerciseDetails'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
function Exercise() {
    return (
      <div className='pt-20'>
         <h1 className='text-base  md:text-[32px] text-[#021526] text-center mb-8 font-MorabbaBold  tracking-wide'  style={{wordSpacing : "6px"}}>جدیدترین ها  در  اخبار ورزش</h1>
          <div className='container  '>
          <div className="relative hidden md:flex justify-between items-center w-full">
  <button
    className="swiper-button-next absolute bottom-0 right-0 z-20 
               flex items-center justify-center w-12 h-12 rounded-full 
                text-white -translate-y-1/2"
    type="button"
    aria-label="Next Slide"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  </button>

  <button
    className="swiper-button-prev absolute bottom-0 left-0 z-20 
               flex items-center justify-center w-12 h-12 rounded-full 
                text-white -translate-y-1/2"
    type="button"
    aria-label="Previous Slide"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m18.75 4.5-7.5 7.5 7.5 7.5"
      />
    </svg>
  </button>
</div>
    
    
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-prev",
                prevEl: ".swiper-button-next",
              }}
              breakpoints={{
               640 : { slidesPerView: 2 },
              }}
            >
    

             
              <SwiperSlide>
                <ExerciseDetails
                  title="افزایش دریافتی فوتبالیست ها و معافیت از سربازی "
                  price="۳۰۰,۰۰۰ تومان"
                  size="از سایز L تا XXL"
                  img="/images/main/exersice.png"
                  isTrue = "true"
                   delay="0"
                  duration="1200"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ExerciseDetails
                  title="شکست استرالیا در گام نخست جام جهانی فوتبال زنان!"
                  price="۳۰۰,۰۰۰ تومان"
                  size="از سایز L تا XXL"
                  img="/images/main/exersiceTwo.png"
                  delay="0"
                  duration="1200"
                  isTrue
                 
                  
                />
              </SwiperSlide>
              <SwiperSlide>
                <ExerciseDetails
                isTrue
                  title="شکست استرالیا در گام نخست جام جهانی فوتبال زنان!"
                  price="۳۰۰,۰۰۰ تومان"
                  size="از سایز L تا XXL"
                  img="/images/main/exersice.png"
                     delay="400"
                     duration="1200"
                 
                  
                />
              </SwiperSlide>
             
    
            </Swiper>
          </div>
      </div>
    )
}

export default Exercise
