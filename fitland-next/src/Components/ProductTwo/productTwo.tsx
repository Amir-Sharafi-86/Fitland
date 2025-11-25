import React  from 'react';
import ProductDetailsTwo from '../productDetailsTwo/productDetailsTwo';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function ProductTwo() {
  return (
    <div className='w-full bg-[#FFF7F4] mt-20 pb-9'>
      <h1 className=' text-base  md:text-[32px] text-[#021526] text-center mb-8 font-MorabbaBold pt-8'>تخفیفات ویژه</h1>
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
          spaceBetween={45}
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
            <ProductDetailsTwo
              title="ست نایک مدل S-2000"
              price="۳۰۰,۰۰۰ تومان"
              size="از سایز L تا XXL"
              img="/images/main/shoesMain.png"
              delay="0"
              duration="800"
              
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductDetailsTwo
              title="ست نایک مدل S-2000"
              price="۳۰۰,۰۰۰ تومان"
              size="از سایز L تا XXL"
              img="/images/main/mainDress.png"
              delay="0"
              duration="800"
              
            />
          </SwiperSlide>
           <SwiperSlide>
            <ProductDetailsTwo
              title="ست نایک مدل S-2000"
              price="۳۰۰,۰۰۰ تومان"
              size="از سایز L تا XXL"
              img="/images/main/shoesMain.png"
              delay="0"
              duration="800"
              
            />
          </SwiperSlide>

           <SwiperSlide>
            <ProductDetailsTwo
              title="ست نایک مدل S-2000"
              price="۳۰۰,۰۰۰ تومان"
              size="از سایز L تا XXL"
              img="/images/main/mainDress.png"
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
