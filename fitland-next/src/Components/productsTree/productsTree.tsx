import React  from 'react';
import ProdcutsDetailsTree from '../ProdcutsDetailsTree/ProdcutsDetailsTree';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
function ProductsTree() {
    return (
        <div className='w-full bg-white mt-20 pb-9 '>
          <h1 className=' max-md:text-base text-[32px] text-[#021526] text-center mb-8 font-MorabbaBold pt-8'>جدید ترین کفش های ورزشی </h1>
          <div className='container '>
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
              slidesPerView={2}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                768: { slidesPerView: 3 },
              }}
            >
                 <SwiperSlide>
                <ProdcutsDetailsTree
                  title="سویشرت نایک مدل AO-14"
                  price="۳۰۰,۰۰۰ تومان"
                  size="از سایز L تا XXL"
                  img="/images/main/shoesMain.png"
                  delay="0"
                  duration="800"
                  
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProdcutsDetailsTree
                  title="سویشرت نایک مدل AO-14"
                  price="۳۰۰,۰۰۰ تومان"
                  size="از سایز L تا XXL"
                  img="/images/main/mainDress.png"
                  isTrue = "true"
                />
              </SwiperSlide>
    
             
    
              <SwiperSlide>
      <ProdcutsDetailsTree
        title="کفش نایک مدل S-2000"
        price="۲۰۰۰۰۰ تومان"
        size="از سایز L تا XXL"
        img="/images/main/shoesMain.png"
        delay="200"
        duration="800"
    
      />
    </SwiperSlide>
    
    
              <SwiperSlide>
                <ProdcutsDetailsTree
                  title="کفش نایک مدل S-2000"
                  price="۲۰۰۰۰۰ تومان"
                  size="از سایز L تا XXL"
                  img="/images/main/mainDress.png"
                 delay="400"
                 duration="800"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      );
}

export default ProductsTree
