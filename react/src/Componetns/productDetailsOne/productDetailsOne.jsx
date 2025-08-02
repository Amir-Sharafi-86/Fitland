import React from 'react'

function ProductDetailsOne(props) {
    return (
        <div>
            <div className="relative inline-block lg:w-[400px]">
  <img src={props.img} className="w-full rounded-md max-sm:h-[160px] max-sm:w-[129px]"  alt="" />
  <div className="absolute left-0 right-0 -bottom-[3rem]  bg-[#021526] text-white transform -skew-y-6 rounded-3xl max-xs:p-3.5 max-sm:p-5 p-6.5 md:p-10 z-10 overflow-hidden">
    <div className="transform skew-y-6">
      <span className="font-MorabbaBold text-lg max-sm:text-xs block">
        {props.title}
      </span>
      <span className="block mt-2 font-MorabbaMedium text-lg max-sm:text-xs max-xs:text-[10px] ">
        <span className="text-[#FC9877] ml-1 font-MorabbaMedium ">50%</span>
        {props.text}
      </span>
    </div>
  </div>
          </div>



        </div>
    )
}

export default ProductDetailsOne
