import React from 'react'

function Login() {
    return (
            <>
                <main className='max-w-[1440px] mx-auto '>
                    <div className="container h-screen flex justify-center items-center">
                        <div className="form bg-white w-[456px]  border border-[#EDEDED] p-8.5">
                            <h1 className='text-[#000000] text-[28px] mb-8 font-MorabbaMedium'>ورود | ثبت‌نام</h1>

                            <form action="">
                                <input type="text" placeholder='*********09 ' className='placeholder:text-[#ADADAD] py-2 px-3 placeholder:text-sm  placeholder:font-MorabbaMedium border border-[#ADADAD] w-full rounded-lg  outline-none text-black  focus:outline-none focus:border focus:border-orange-noraml' />
                            </form>

                            <button className='btn-orange text-white font-MorabbaBold'>ادامه</button>
                        </div>
                    </div>
                </main>
            </>        
    )
}

export default Login
