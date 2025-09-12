import React  , {useEffect}from 'react'
import AOS from 'aos'
function ProductDetailsOne(props) {
     useEffect(() => {
              AOS.init({
                  // duration: 5000,
                  once: false,     
                });
          } , [])
    return (
        <div>
            <div className="relative inline-block "
             data-aos="fade-left"
             data-aos-delay={props.delay}
             data-aos-duration={props.duration}
            >
  <img src={props.img} className="w-full sm:w-[392px] rounded-md max-sm:h-[216px] sm:aspect-[3/3]  overflow-hidden"   alt="" />
  <div className="absolute left-0 right-0 -bottom-[3rem]  bg-[#021526] text-white transform -skew-y-6 rounded-3xl max-xs:p-3.5 max-sm:p-4 p-6.5 md:p-10 z-10 overflow-hidden">
    <div className="transform skew-y-6">
      <span className="font-MorabbaBold text-[21.8px]  max-sm:text-xs block">
        {props.title}
      </span>
      <span className="block mt-2 font-MorabbaMedium text-xl max-sm:text-xs max-xs:text-[10px] ">
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
