import React from 'react'
import Header from '../../Componetns/Header/header'
import DetailsProductBox from '../../Componetns/detailsProductBox/detailsProductBox'
function Product() {
        return (
            <>
                <Header></Header>
                <main className='max-w-[1440px] mx-auto'>

                <section className='mt-[112px]'>
                  <div className="container ">
                    <div className='grid grid-cols-12   '>
                        <div className="filter-box border p-[17px] w-[288px] h-[405px] border-[#CBCBCB] py-4 px-4.5 rounded-2xl bg-white col-span-2  " >
                         
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

                        <div className='col-span-10  mr-32'>
                          <div className="header__menu">
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

                          <div className="wrapper__box mt-6 grid grid-cols-3 gap-x-6">
                            <DetailsProductBox></DetailsProductBox>
                            <DetailsProductBox></DetailsProductBox>
                            <DetailsProductBox></DetailsProductBox>
                          </div>
                        </div>
                    </div>
                  </div>
                </section>

                </main>
                
            </>
         )
}

export default Product
