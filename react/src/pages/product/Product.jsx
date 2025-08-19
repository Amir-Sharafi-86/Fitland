import React from 'react'
import Header from '../../Componetns/Header/header'
import DetailsProductBox from '../../Componetns/detailsProductBox/detailsProductBox'
import DetailsProductBoxTwo from '../../Componetns/detailsProductBoxTwo/detailsProductBoxTwo'
import Footer from '../../Componetns/Footer/footer'
import Filtering from '../../Componetns/filtering/filtering'
import { useState } from 'react'
function Product() {
  const [isShowFilter ,  setIsShowFilter ] = useState(false)

  const showFilteringBox = () => {
        setIsShowFilter(!isShowFilter)
  }

  return (


            <>
                <Header></Header>
                <main className='max-w-[1440px] mx-auto'>

                <section className='  max-sm:mt-6 mt-[112px]'>
                  <div className="container ">
                    <div className='lg:grid lg:grid-cols-12   '>
                        <div className="filter-box max-lg:hidden border p-[17px] w-[288px] h-[405px] border-[#CBCBCB] py-4 px-4.5 rounded-2xl bg-white lg:col-span-2  " >
                         
                          <div className="header-filter flex-justify mb-4 text-sm font-MorabbaMedium">
                            <span className=' text-black-mainTwo font-MorabbaMedium'>فیلترها</span>
                            <span className='text-[#868686]'>حذف فیلترها</span>
                          </div>
                       <div>
                          <div className='flex-justify'>
                            <span>محصولات موجود </span>
                            <p>a</p>
                          </div>
                          <div className='flex-justify mt-2'>
                            <span>محصولات موجود </span>
                            <p>a</p>
                          </div>
                       </div>


                        <div className='filter-main mt-10 space-y-10'>
                          <div className='flex-justify'>

                              <span>قیمت</span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4.5 text-[#ADADAD]">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

                          </div>
                          <div className='flex-justify'>

                              <span>قیمت</span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4.5 text-[#ADADAD]">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

                          </div>
                          <div className='flex-justify'>

                              <span>قیمت</span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4.5 text-[#ADADAD]">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

                          </div>
                          <div className='flex-justify'>

                              <span>قیمت</span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4.5 text-[#ADADAD]">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

                          </div>
                        </div>

                        </div>

                        <div className='lg:col-span-10  lg:mr-32'>
                          <div className="header__menu max-sm:hidden">
                            <ul className='flex gap-x-4 font-MorabbaMedium items-center'>
                              <li>
                                  <a href="" className='text-orange-noraml text-base border-b-2 border-orange-noraml ' >پربازدیدترین </a>
                              </li>
                              <li>
                                  <a href="" className='text-[#404040] text-base border-b-2  ' >جدیدترین</a>
                              </li>
                              <li>
                                  <a href="" className='text-[#404040] text-base border-b-2  ' >پرفروش ترین</a>
                              </li>
                              <li>
                                  <a href="" className='text-[#242424] text-base border-b-2  ' >گران ترین</a>
                              </li>
                              <li>
                                  <a href="" className='text-[#242424] text-base border-b-2  ' >ارزان ترین</a>
                              </li>
                            </ul>
                          </div>

                          <div className="wrapper__box mt-6 max-sm:hidden grid grid-cols-3 gap-6 mb-[121px]">
                            <DetailsProductBox></DetailsProductBox>
                            <DetailsProductBox></DetailsProductBox>
                            <DetailsProductBox></DetailsProductBox>
                            <DetailsProductBox></DetailsProductBox>
                            <DetailsProductBox></DetailsProductBox>
                            <DetailsProductBox></DetailsProductBox>
                            <DetailsProductBox></DetailsProductBox>
                            <DetailsProductBox></DetailsProductBox>
                            <DetailsProductBox></DetailsProductBox>
                            <DetailsProductBox></DetailsProductBox>
                            <DetailsProductBox></DetailsProductBox>
                            <DetailsProductBox></DetailsProductBox>
                          </div>
      
                          {isShowFilter === true && (
                            <Filtering  setIsShowFilter={setIsShowFilter} ></Filtering>
                          )}

                          <div className='wrapper__box__mobile  mt-6  block sm:hidden mx-auto space-y-5 mb-[121px]'>
                            <div className='mb-6 flex items-center gap-x-2 cursor-pointer' onClick={showFilteringBox}> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
                <span className='text-[#000000] text-sm font-MorabbaMedium ' >فیلترها</span>
                            </div>
                            <DetailsProductBoxTwo></DetailsProductBoxTwo>
                            <DetailsProductBoxTwo></DetailsProductBoxTwo>
                            <DetailsProductBoxTwo></DetailsProductBoxTwo>
                            <DetailsProductBoxTwo></DetailsProductBoxTwo>
                            <DetailsProductBoxTwo></DetailsProductBoxTwo>
                            <DetailsProductBoxTwo></DetailsProductBoxTwo>
                            <DetailsProductBoxTwo></DetailsProductBoxTwo>
                            <DetailsProductBoxTwo></DetailsProductBoxTwo>
                            <DetailsProductBoxTwo></DetailsProductBoxTwo>
                          </div>
                        </div>
                    </div>
                  </div>
                </section>

                </main>

                <Footer></Footer>
            </>
         )
}

export default Product
