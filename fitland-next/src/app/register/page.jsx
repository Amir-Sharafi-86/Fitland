"use client"

import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'

function Register() {

    const formik  = useFormik({
        initialValues : {
            phone : "",
            password: ""
        },

        validationSchema: Yup.object({
          phone: Yup.string()
              .min(11, 'شماره تلفن نباید کمتر از 11 عدد باشد')
              .required("پر کردن فیلد اجباری است "),
          password: Yup.string()
              .min(8, 'پسورد نباید کمتر از 8 عدد باشد ')
              .max(12, 'پسورد نباید بیشتر از12 عدد باشد ')
              .required("پر کردن فیلد اجباری است "),
        }),

        onSubmit  : (values) => {
            console.log(values);
        }
    })

    return (
        <>
         <main>
  {/* Full-screen layout with image and form side by side */}
  <div className='h-screen w-full flex'>

    {/* Right side: Login form */}
    <div className="w-1/2 flex justify-center items-center bg-white">
      <div className="form w-full sm:w-[456px] border border-[#EDEDED] p-8.5">
        <h1 className='text-[#000000] text-[28px] mb-8 font-MorabbaMedium'> ثبت‌نام</h1>

        {/* Formik form */}
        <form onSubmit={formik.handleSubmit} >
          {/* Phone input field */}
          <input 
            maxLength={11}
            name='phone'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            type="text" 
            placeholder='ایمیل' 
            className='placeholder:text-[#ADADAD] py-2 px-3 placeholder:text-sm placeholder:font-MorabbaMedium border border-[#ADADAD] w-full rounded-lg outline-none text-black focus:outline-none focus:border focus:border-orange-noraml' 
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm mt-2 font-MorabbaBold">
              {formik.errors.phone}
            </div>
          )}

          {/* Password input field */}
          <input 
            maxLength={8}
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type="password" 
            placeholder='پسورد ' 
            className='placeholder:text-[#ADADAD] mt-4 py-2 px-3 placeholder:text-sm placeholder:font-MorabbaMedium border border-[#ADADAD] w-full rounded-lg outline-none text-black focus:outline-none focus:border focus:border-orange-noraml' 
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm mt-2 font-MorabbaBold">
              {formik.errors.password}
            </div>
          )}
          
          {/* Submit button */}
          <button type="submit" className='btn-orange  cursor-pointer text-white font-MorabbaBold mt-4'>
            ادامه
          </button>
             <Link href={`/login`}>
                        <span className='text-black gap-x-1 text-[14.5px] font-MorabbaBold mt-4 flex-center inline-block'>
                        حساب کاربری دارید؟      <span className='text-orange-noraml'>لاگین کنید </span>       
                        </span>
                    </Link>
        </form>
      </div>
    </div>

    {/* Left side: Fullscreen image */}
    <div className='w-1/2 h-full relative'>
      <img 
        src="./images/main/login-images.png" 
        className='w-full h-full block' 
        alt="Login visual" 
      />

      <div className='absolute top-1/2 left-1/2 cursor-pointer transform z-999 -translate-x-1/2 -translate-y-1/2 text-black text-center'>
        <img src="/images/header/logo.png" alt="logo" className='' />
        <Link href={`/`}>
            <h1 className='mb-4 font-MorabbaBold text-lg text-white mt-6'>برگشت به صفحه اصلی</h1>
        </Link>
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-black/90'></div>
    </div>

  </div>
</main>
        </>
    )
}

export default Register
