import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';


function Login() {

      validationSchema = Yup.object({
        phone : Yup.string().min(8 , 'dont must 8 character')
    });

    const formik  = useFormik({
        initialValues : {
            phone : ""
        },

        validationSchema : Yup.object({
            phone : Yup.string().min(8 , 'dont must 8 character')
        }),
        
        onSubmit  : (values) => {
            console.log(values);
        }
    })


    return (
            <>
                <main className='max-w-[1440px] mx-auto '>
                    <div className="container h-screen flex justify-center items-center">
                        <div className="form bg-white w-full sm:w-[456px]  border border-[#EDEDED] p-8.5">
                            <h1 className='text-[#000000] text-[28px] mb-8 font-MorabbaMedium'>ورود | ثبت‌نام</h1>

                            <form action="" onSubmit={formik.handleSubmit}>
                                <input 
                               name='phone'
                               onChange={formik.handleChange}
                               value={formik.values.phone}
                               type="text" placeholder='*********09 ' className='placeholder:text-[#ADADAD] py-2 px-3 placeholder:text-sm  placeholder:font-MorabbaMedium border border-[#ADADAD] w-full rounded-lg  outline-none text-black  focus:outline-none focus:border focus:border-orange-noraml' />
                        
                            <button   type="submit" className='btn-orange text-white font-MorabbaBold'>ادامه</button>
                            </form>

                        </div>
                    </div>
                </main>
            </>        
    )
}

export default Login
