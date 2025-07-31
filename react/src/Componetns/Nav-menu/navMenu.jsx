import React from 'react'

function NavMenu({title}) {
    return (
        <div>
            <div className="hidden lg:block mt-10">
                <div className="wrapper-menu  ">
                    <ul className='text-[#000306] text-xs  lg:text-base font-MorabbaBold flex justify-between bg-[#F9F9F9] py-4 px-10 rounded-2xl '>
                        <div className="left-menu flex gap-x-10">
                        <a href="">مردانه</a>
                            <a href="">زنانه</a>
                            <a href="">بچگانه</a>
                            <a href="">لوازم ورزشی </a>
                            <a href="">شیکر و جاگ</a>
                        </div>
                        <div className='right-menu flex gap-x-10'>
                        <li className='flex gap-x-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-noraml">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
                            <a href="">جدید ترین محصولات</a>

                        </li>
                        <li className='flex gap-x-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-noraml">
  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>
                            <a href="">تخفیفات ویژه</a>


                        </li>
                        <li className='flex gap-x-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-noraml">
  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>
                            <a href="">تخفیفات ویژه</a>


                        </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavMenu;
