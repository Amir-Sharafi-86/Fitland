"use client"
import React, { useEffect } from "react"
import AOS from "aos"

interface ProductDetailsOneProps {
  delay?: number | null
  duration?: number | null
  img: string
  title: string
  text: string
}

function ProductDetailsOne(props: ProductDetailsOneProps) {
  useEffect(() => {
    const handleScroll = () => {
      AOS.refresh()
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      <div
        className="relative inline-block"
        data-aos="fade-left"
        data-aos-delay={props.delay ?? undefined}
        data-aos-duration={props.duration ?? undefined}
      >
        <img
          src={props.img}
          className="w-full sm:w-[392px] rounded-md max-sm:h-[216px] sm:aspect-[3/3] overflow-hidden"
          alt=""
        />
        <div className="absolute left-0 right-0 -bottom-[3.5rem] bg-[#021526] text-white transform -skew-y-6 rounded-3xl max-xs:p-3.5 max-sm:p-4 p-6.5 md:p-10 z-10 overflow-hidden">
          <div className="transform skew-y-6">
            <span className="font-MorabbaBold text-[21.8px] max-sm:whitespace-nowrap max-sm:text-[10px] block">
              {props.title}
            </span>
            <span className="block mt-2 font-MorabbaMedium text-xl max-sm:text-xs max-xs:text-[10px]">
              <span className="text-[#FC9877] ml-1 font-MorabbaMedium max-sm:whitespace-nowrap">50%</span>
              {props.text}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsOne
