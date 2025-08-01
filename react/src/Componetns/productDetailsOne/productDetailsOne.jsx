import React from 'react'

function ProductDetailsOne(props) {
    return (
        <div>
            <div>
            <div className="relative inline-block w-[400px]">
  <img src={props.img} className="w-full rounded-md" alt="" />

  <div className="absolute left-0 right-0 -bottom-[3rem]  bg-[#021526] text-white transform -skew-y-6 rounded-3xl p-10 z-10 overflow-hidden">
    <div className="transform skew-y-6">
      <span className="font-MorabbaBold text-lg max-sm:text-xs block">
        {props.title}
      </span>
      <span className="inline-block mt-2 font-MorabbaMedium text-base">
        <span className="text-[#FC9877] ml-1 font-MorabbaMedium text-base">50%</span>
        {props.text}
      </span>
    </div>
  </div>
</div>


            </div>
        </div>
    )
}

export default ProductDetailsOne
