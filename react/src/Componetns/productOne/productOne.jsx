import React from 'react'
import ProductDetailsOne from '../productDetailsOne/productDetailsOne';


function ProductOne() {
    return (
        <div className='my-[80px] container flex  justify-center sm:justify-between items-end gap-4.5 md:gap-9'>
            <ProductDetailsOne  title="جدید ترین تخفیفات فصل برند نایک" text = " تخفیف روی تمام محصولات "  duration="2500" deley="1200" img="/public/images/main/product.jpg" />
            <ProductDetailsOne  title="جدید ترین تخفیفات فصل برند پوما" text = " تخفیف روی تمام محصولات "  duration="2500" deley="1200" img="/public/images/main/product2.png" />
          
            
        <div className="title hidden lg:block">
            <p className='text-midnight text-sm md:text-2xl font-MorabbaBold mb-2.5'>جدید ترین محصولات</p>
            <span className='text-[#606060] text-base max-sm:text-xs max-w-[309px] font-MorabbaMedium inline-block'>جدید ترین محصولات با ارسال رایگان تهیه 
کنید و در سریع ترین زمان درب منزل 
تحویل
 بگیرید
</span>

                    <button className='btn-orange'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-white border border-white rounded-full p-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path></svg>
                    <a href="" class="text-white text-base max-sm:text-xs whitespace-nowrap max-sm:w-full font-MorabbaBold">مشاهده همه محصولات</a>
                    </button>

        </div>


        </div>
    )
}

export default ProductOne
