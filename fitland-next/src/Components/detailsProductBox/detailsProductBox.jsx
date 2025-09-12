import React from 'react'

function DetailsProductBox() {
    return (
        <>
        <div className="box max-sm:hidden text-black-main bg-[#F9F9F9]">
            <img src="/images/main/mainProductpage.jpg"  className='w-full' alt="" />
            <div className='pr-3 py-4'>
                            <p className='text-base max-md:text-xs font-MorabbaMedium'>تیشرت زنانه کد 1737</p>
                            <span className=' text-[10px] xs:text-xs font-MorabbaLight inline-block my-2.5  text-[#01070D]' style={{wordSpacing : "2px"}}>از سایز M تا 3XL</span>
                            <span className=' text-xs xs:text-sm font-MorabbaLight block my-2.5 ' style={{wordSpacing : "2px"}}> 400,000 تومان</span>
            <div class="flex "><div class="componetns bg-[#000306] size-4.5  rounded-full"></div><div class="componetns bg-[#CBCBCB] size-4.5  rounded-full"></div><div class="componetns bg-[#000306] size-4.5  rounded-full"></div></div>

            </div>
            </div>

        </>
    )
}

export default DetailsProductBox
