import React, { useState } from 'react';

interface setIsShowDropProp {
  setIsShowFilter: (value: boolean) => void;
}

function Filtering({ setIsShowFilter }: setIsShowDropProp) {
  const [isShowDrop, setIsShowDrop] = useState<boolean>(false);

  const handleDrop = () => {
    setIsShowDrop(!isShowDrop);
  };

  const hideFilter = () => {
    setIsShowFilter(false);
  };

  return (
    <div className="filter fixed flex flex-col inset-0 bg-white sm:hidden z-1000">
      <div className="filter__header flex-justify bg-[#EEEEEE] px-8 py-6">
        <span className="text-[#1D2939] text-lg font-MorabbaBold">فیلتر</span>
        <button
          className="border-2 rounded-full p-1 border-[#1D2939] cursor-pointer"
          onClick={hideFilter}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="filter__body h-full flex flex-col pt-6 px-8 pb-8">
        <div className="filter-dropDown flex-justify mb-5 cursor-pointer" onClick={handleDrop}>
          <span className="text-[#1D2939] font-MorabbaMedium">انتخاب رنگ</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-[#1D2939] cursor-pointer"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        {isShowDrop === true && (
          <div className="filter-dropDown__content space-y-4">
            <div className="filter-color flex-justify font-MorabbaMedium">
              <div className="flex items-center gap-x-1">
                <div className="shape size-2 bg-[#7B4800] rounded-full"></div>
                قهوه ای
              </div>
              <div>
                <label>
                  <input type="checkbox" className="hidden checkbox" />
                  <span className="bg-white size-6 rounded-md block markerr border border-[#E5E5E5]"></span>
                </label>
              </div>
            </div>
            <div className="filter-color flex-justify font-MorabbaMedium">
              <div className="flex items-center gap-x-1">
                <div className="shape size-2 bg-[#7B4800] rounded-full"></div>
                قهوه ای
              </div>
              <div>
                <label>
                  <input type="checkbox" className="hidden checkbox" />
                  <span className="size-6 bg-white rounded-md block markerr border border-[#E5E5E5]"></span>
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="filter-toggle mt-5 pt-5 border-t border-[#EEEEEE] font-MorabbaMedium">
          <label className="toggle-btn flex justify-between items-center">
            <span>ارزان ترین </span>
            <input type="checkbox" className="toggle-btn__input hidden" />
            <span className="toggle-btn__marker block bg-[#EEEEEE] w-11 h-6 rounded-full relative"></span>
          </label>
        </div>

        <div className="filter-toggle mt-5 pt-5 border-t border-[#EEEEEE] font-MorabbaMedium">
          <label className="toggle-btn flex justify-between items-center">
            <span>گران ترین</span>
            <input type="checkbox" className="toggle-btn__input hidden" />
            <span className="toggle-btn__marker block bg-[#EEEEEE] w-11 h-6 rounded-full relative"></span>
          </label>
        </div>

        <button
          className="bg-[#C9184A] mt-auto w-full text-center text-white text-base py-3 rounded-lg cursor-pointer"
          onClick={hideFilter}
        >
          اعمال فیلتر
        </button>
      </div>
    </div>
  );
}

export default Filtering;
