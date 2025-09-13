"use client"
import React, { useEffect } from "react"
import AOS from "aos"
import Link from "next/link"

interface ProductDetailsTwoProps {
  delay?: number | null | string
  duration?: number | null | string
  img: string
  title: string
  price: string | number
  size: string | number
  className?: string
  isTrue?: boolean
}

function ProductDetailsTwo(props: ProductDetailsTwoProps) {
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
    <div className={props.className}>
      <Link href={`/product/1`}>
        <div
          className="box-prodcut cursor-pointer pt-0 pb-20 border border-[#EDEDED] bg-white"
          data-aos="fade-up"
          data-aos-delay={props.delay ?? undefined}
          data-aos-duration={props.duration ?? undefined}
        >
          <div className="relative sm:aspect-[3/2.1] overflow-hidden">
            <img
              src={props.img}
              className="rounded-md w-full h-full object-cover max-sm:h-[280px]"
              alt={props.title}
            />
          </div>

          {props.isTrue ? (
            <div className="bg-[#FA541C] size-10 rounded-full absolute flex-center text-[#000000] top-2 text-base left-2">
              VIP
            </div>
          ) : (
            <div className="bg-[#67AAE6] size-10 rounded-full absolute flex-center text-[#000000] top-2 text-base left-2">
              24 %
            </div>
          )}

          <div className="flex flex-col mt-4 text-[15px] font-MorabbaMedium gap-y-3 pr-4">
            <span className="text-[#01070D] text-base md:text-xl">{props.title}</span>
            <span className="text-[#000306] text-sm md:text-base">{props.price}</span>
            <span className="text-[#404040] text-xs md:text-sm">{props.size}</span>
          </div>

          <div className="flex mt-4 pr-4">
            <div className="componetns bg-[#000306] size-4.5 rounded-full"></div>
            <div className="componetns bg-[#CBCBCB] size-4.5 rounded-full"></div>
            <div className="componetns bg-[#000306] size-4.5 rounded-full"></div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductDetailsTwo
