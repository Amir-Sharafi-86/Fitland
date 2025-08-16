import React  from 'react';
import ProductDetailsTwo from '../productDetailsTwo/productDetailsTwo';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function ProductTwo() {
  return (
    <div className='w-full bg-[#FFF7F4] py-20 '>
      <h1 className=' text-base  md:text-[32px] text-[#021526] text-center mb-8 font-MorabbaBold'>تخفیفات ویژه</h1>
      <div className='container mx-auto'>
        <div className='relative hidden md:flex gap-x-2.5 bottom-4.5  '>  
        <button 
  className='cursor-pointer  rounded-full mb-8 p-2 swiper-button-next absolute top-1/2 right-0 w-10 h-10 -translate-y-1/2 z-20'
  type="button"
  aria-label="Next Slide"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
  </svg>
</button>



          <button 
            className='cursor-pointer  rounded-full mb-8 p-2 swiper-button-prev absolute top-2/2  size-10 -translate-y-1/2 z-20'
            type="button"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
          </button>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
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
            <ProductDetailsTwo
              title="ست نایک مدل S-2000"
              price="۳۰۰,۰۰۰ تومان"
              size="از سایز L تا XXL"
              img="/public/images/main/prodcuttwos.png"
              delay="0"
              duration="800"
              
            />
          </SwiperSlide>
           <SwiperSlide>
            <ProductDetailsTwo
              title="ست نایک مدل S-2000"
              price="۳۰۰,۰۰۰ تومان"
              size="از سایز L تا XXL"
              img="/public/images/main/prodcuttwos.png"
              delay="0"
              duration="800"
              
            />
          </SwiperSlide>
           <SwiperSlide>
            <ProductDetailsTwo
              title="ست نایک مدل S-2000"
              price="۳۰۰,۰۰۰ تومان"
              size="از سایز L تا XXL"
              img="/public/images/main/prodcuttwos.png"
              delay="0"
              duration="800"
              
            />
          </SwiperSlide>
           <SwiperSlide>
            <ProductDetailsTwo
              title="ست نایک مدل S-2000"
              price="۳۰۰,۰۰۰ تومان"
              size="از سایز L تا XXL"
              img="/public/images/main/prodcuttwos.png"
              delay="0"
              duration="800"
              
            />
          </SwiperSlide>

       
        </Swiper>
      </div>
    </div>
  );
}

export default ProductTwo;
