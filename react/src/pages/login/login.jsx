import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';


function Login() {

    // Initialize Formik with initial values, validation schema, and submit handler
    const formik  = useFormik({
        initialValues : {
            phone : ""
        },

        // Define validation rules using Yup
        validationSchema : Yup.object({
            phone : Yup.string()
                .min(11, 'Must be at least 11 digits')
                .required("Phone number is required")
        }),

        // Handle form submission
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
        <h1 className='text-[#000000] text-[28px] mb-8 font-MorabbaMedium'>ورود | ثبت‌نام</h1>

        {/* Formik form */}
        <form onSubmit={formik.handleSubmit}>
          {/* Phone input field */}
          <input 
            maxLength={11}
            name='phone'
            onChange={formik.handleChange}
            value={formik.values.phone}
            type="text" 
            placeholder='*********09' 
            className='placeholder:text-[#ADADAD] py-2 px-3 placeholder:text-sm placeholder:font-MorabbaMedium border border-[#ADADAD] w-full rounded-lg outline-none text-black focus:outline-none focus:border focus:border-orange-noraml' 
          />
          
          {/* Validation error message */}
          {formik.errors.phone && (
            <div className="text-red-500 text-sm mt-2 font-MorabbaBold">
              {formik.errors.phone}
            </div>
          )}

          {/* Submit button */}
          <button type="submit" className='btn-orange text-white font-MorabbaBold mt-4'>
            ادامه
          </button>
        </form>
      </div>
    </div>



        {/* Left side: Fullscreen image */}
        <div className='w-1/2 h-full    relative'>
      <img 
        src="./images/main/login-images.png" 
        className='w-full h-full  block' 
        alt="Login visual" 
      />

 <div className='absolute top-1/2 left-1/2  cursor-pointer transform z-999   -translate-x-1/2 -translate-y-1/2 text-black text-center'>
    <img src="/images/header/logo.png" alt="logo" className='' />
    <Link to={`/`}>
        <h1 className='mb-4 font-MorabbaBold text-lg  text-white mt-6'>برگشت به صفحه اصلی</h1>
    </Link>
 </div>
    <div className='absolute top-0 left-0 w-full h-full bg-black/90'></div>
    </div>


  </div>
</main>
        </>
    )
}

export default Login
