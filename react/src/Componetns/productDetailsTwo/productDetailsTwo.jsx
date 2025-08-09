import React from 'react'

function ProductDetailsTwo(props) {
    return (
        <div  className={props.className}>
                    <div className="box-prodcut p-4  border border-[#EDEDED] bg-white   ">
                        <div>
                            <img src={props.img} className='rounded-md' />
                        </div>
                        <div className='flex flex-col  mt-3.5 text-[15px]  font-MorabbaMedium gap-y-3'>
                            <span className='text-[#01070D]'>{props.title}</span>
                            <span className='text-[#000306] text-sm'>{props.price}</span>
                            <span className='text-[#404040] text-xs'>{props.size}</span>
                        </div>
                        <div>
                            {/* //?codes */}
                            <div className="after-elem"></div>
                        </div>
                    </div>
        </div>
    )
}

export default ProductDetailsTwo
