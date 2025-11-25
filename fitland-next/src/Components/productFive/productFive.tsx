import React from 'react'
import ProductDetailsFour from '../ProductDetailsFour/ProductDetailsFour'
import Link from 'next/link'

function ProdcutFive() {
    return (
        <div className='my-[80px]  xl:pb-20 container flex  justify-center sm:justify-between items-end gap-4.5 md:gap-9'>
            <ProductDetailsFour  title="جدید ترین تخفیفات فصل برند نایک" text = " تخفیف روی تمام محصولات "  duration="2500" deley="1200" img="/images/main/productFive.jpg" />
            <ProductDetailsFour  title="جدید ترین تخفیفات فصل برند پوما" text = " تخفیف روی تمام محصولات "  duration="2500" deley="1200" img="/images/main/productFive.jpg" />
          
            
        <div className="title hidden lg:block">
            <p className='text-midnight text-sm md:text-2xl font-MorabbaBold mb-2.5'>جدید ترین محصولات</p>
            <span className='text-[#606060] text-base max-sm:text-xs max-w-[309px] font-MorabbaMedium inline-block'>جدید ترین محصولات با ارسال رایگان تهیه 
بزودی کامل ترین مجموعه از لوازم کمپ در فیت لند 
از سفر لذت ببر
</span>

                    <Link href='/product' className='btn-orange flex justify-center text-white text-base max-sm:text-xs whitespace-nowrap max-sm:w-full font-MorabbaBold items-end'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-white border border-white rounded-full p-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path></svg>
                               مشاهده همه محصولات
                    </Link>

        </div>


        </div>
    )
}

export default ProdcutFive
