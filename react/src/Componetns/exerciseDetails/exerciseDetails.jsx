import React from 'react'

function ExerciseDetails(props) {
    return (
       <>

          <div className="main-box__content mb-20  border border-[#CBCBCB] bg-white rounded-2xl">
               <img src={props.img}  className='rounded-sm w-full' alt="" />
               <span className='text-black-main  font-MorabbaBold text-base md:text-2xl pt-4 pr-2.5 block'>{props.title}</span>
               <p className=' max-w-[316px] md:max-w-[516px] text-xs md:text-base mt-4 mb-7 text-black-main font-MorabbaBold pr-2'>خبرها حاکی از آن است که رییس فدراسیون فوتبال اعلام کرد در فصل جاری قرار داد هر بازیکن فوتبال 50 درصد افزایش پیدا میکند همچنین وی گفت...</p>
               <button class="py-2 px-5 bg-orange-noraml rounded-lg flex-center  gap-x-2 mt-8 mr-4 mb-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-white border border-white rounded-full p-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path></svg><a href="" class="text-white text-base max-sm:text-xs whitespace-nowrap max-sm:w-full font-MorabbaBold">مشاهده خبر</a></button>
          </div>
        
       </>
    )
}

export default ExerciseDetails
