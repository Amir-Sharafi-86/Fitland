import React from 'react'
import Header from "../../Componetns/Header/header"
function Detailsprodcut() {
    return (
        <>
            <Header></Header>
            <main className='max-w-[1440px] mx-auto'>
                <div className="container">
                    <div className="flex gap-x-6 mt-12">
                        {/* //? img right  */} 
                        <div className=''>
                              <img src="./public/images/main/detailsImg.jpg" className='rounded-md' alt="" />
                        </div>

                        <div className=''>
                            <div className="main__content">
                                <div className="header mb-4">
                                    <span className='text-[#000306] font-MorabbaMedium mb-2 text-[28px]'>KD17</span>
                                    <span className='text-[#868686] text-sm block'>کفش بسکتبال</span>
                                </div>
                                <div>
                                    <span className='text-[32px] text-midnight font-MorabbaBold  mb-4 inline-block'>۶۰۰,۰۰۰ تومان</span>
                                    <div className='flex-justify'>
                                        <span className='text-[#ADADAD] text-2xl'>1,200,000 </span>
                                        <span className='block bg-orange-noraml py-2 px-4 text-white rounded-md '>50%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Detailsprodcut
