import React from 'react'
import { Formik } from 'formik'
function Login() {
    return (
            <>
                <main className='max-w-[1440px] mx-auto '>
                    <div className="container h-screen flex justify-center items-center">
                        <div className="form bg-white w-full sm:w-[456px]  border border-[#EDEDED] p-8.5">
                            <Formik initialValues={{phone : ""}} onSubmit={(values => {
                                console.log(values);
                            })}>
                                {({values , handleChange , handleSubmit}) => (
                                    
                                <form action="" onSubmit={handleSubmit}>
                                    <h1 className='text-[#000000] text-[28px] mb-8 font-MorabbaMedium'>ورود | ثبت‌نام</h1>
                                    <input 
                                    onChange={handleChange}
                                    type="text"  maxLength={12} name='phone' placeholder='*********09 ' value={values.phone} className='placeholder:text-[#ADADAD] py-2 px-3 placeholder:text-sm  placeholder:font-MorabbaMedium border border-[#ADADAD] w-full rounded-lg  outline-none text-black  focus:outline-none focus:border focus:border-orange-noraml' />
                                    <button 
                                    type='submit'
                                    className='btn-orange text-white font-MorabbaBold'>ادامه</button>
                                </form>

                                )}
                            </Formik>
                        </div>
                    </div>
                </main>
            </>        
    )
}

export default Login
