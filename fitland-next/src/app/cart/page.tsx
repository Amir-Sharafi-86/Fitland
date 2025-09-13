import React from 'react'
import Header from '@/Components/Header/header'

interface Props {}

function Page(props: Props) {
  const {} = props

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1440px] grid grid-cols-12 gap-6">
        {/* Products Section */}
        <div className="col-span-8 mt-10 flex flex-col gap-y-4">
          <div className="box__item border rounded-lg overflow-hidden flex gap-x-9 border-[#D9D9D9] bg-white shadow-sm">
            
            {/* Product Image */}
            <div className="img__box w-[300px]">
              <img
                src="./images/image 1.png"
                className="h-[391px] w-full "
                alt="Nike Shoes"
              />
            </div>

            {/* Product Content */}
            <div className="content p-6 flex flex-col justify-between">
              
              {/* Product Header (title + close icon) */}
              <div className="header flex justify-between items-center w-[550px]">
                <span className="text-[#000306] text-lg font-MorabbaBold">
                  کفش نایک مدل 2024 Small
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 cursor-pointer text-gray-500 hover:text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>

              {/* Product Details */}
              <div className="main__content mt-6 flex flex-col gap-y-4">
                {/* Category */}
                <span className="text-[#606060] text-sm inline-block">
                  کفش بسکتبال
                </span>

                {/* Prices (new + old with strikethrough) */}
                <div className="flex items-center gap-x-4">
                  <span className="text-[#032340] text-2xl font-MorabbaBold">
                  600,000 تومان 
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    1,200,000
                  </span>
                </div>

                {/* Size */}
                <span className="font-MorabbaMedium text-[#032340] block">
                  Size 42
                </span>

                {/* Color */}
                <div className="flex gap-x-2 items-center">
                  <span className="bg-[#032340] size-4 block rounded-full border"></span>
                  <span className="text-xs text-[#404040]">Black</span>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-x-4 mt-6">
                <button className="w-8 h-8 flex items-center justify-center border rounded-md bg-gray-100 hover:bg-gray-200">
                  -
                </button>
                <span className="text-sm">1</span>
                <button className="w-8 h-8 flex items-center justify-center border rounded-md bg-gray-100 hover:bg-gray-200">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="box__item border rounded-lg overflow-hidden flex gap-x-9 border-[#D9D9D9] bg-white shadow-sm">
            
            {/* Product Image */}
            <div className="img__box w-[300px]">
              <img
                src="./images/image 1.png"
                className="h-[391px] w-full "
                alt="Nike Shoes"
              />
            </div>

            {/* Product Content */}
            <div className="content p-6 flex flex-col justify-between">
              
              {/* Product Header (title + close icon) */}
              <div className="header flex justify-between items-center w-[550px]">
                <span className="text-[#000306] text-lg font-MorabbaBold">
                  کفش نایک مدل 2024 Small
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 cursor-pointer text-gray-500 hover:text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>

              {/* Product Details */}
              <div className="main__content mt-6 flex flex-col gap-y-4">
                {/* Category */}
                <span className="text-[#606060] text-sm inline-block">
                  کفش بسکتبال
                </span>

                {/* Prices (new + old with strikethrough) */}
                <div className="flex items-center gap-x-4">
                  <span className="text-[#032340] text-2xl font-MorabbaBold">
                  600,000 تومان 
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    1,200,000
                  </span>
                </div>

                {/* Size */}
                <span className="font-MorabbaMedium text-[#032340] block">
                  Size 42
                </span>

                {/* Color */}
                <div className="flex gap-x-2 items-center">
                  <span className="bg-[#032340] size-4 block rounded-full border"></span>
                  <span className="text-xs text-[#404040]">Black</span>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-x-4 mt-6">
                <button className="w-8 h-8 flex items-center justify-center border rounded-md bg-gray-100 hover:bg-gray-200">
                  -
                </button>
                <span className="text-sm">1</span>
                <button className="w-8 h-8 flex items-center justify-center border rounded-md bg-gray-100 hover:bg-gray-200">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="col-span-4 mt-10">
          <h1>amir</h1>
        </div>
      </main>
    </>
  )
}

export default Page
