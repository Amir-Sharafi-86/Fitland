import React, { useEffect, useState } from 'react'
import Herosection from '../Herosection/Herosection'
import ProductOne from '../productOne/productOne'
import ProdcutBanner from '../prodcutBanner/prodcutBanner'
import ProductTwo from '../ProductTwo/productTwo'
import ProductsTree from '../productsTree/productsTree'
import BannerTwo from '../bannerTwo/bannerTwo'
import ProductsFour from '../productsFour/productsFour'
import ProdcutFive from '../productFive/productFive'
import BannerTree from '../bannerTree/bannerTree'
import Exercise from '../exercise/exercise'
import TopFooter from '../topFooter/topFooter'
import Footer from '../Footer/footer'
import Overlay from '../overlay/overlay'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'



function Main() {
    const [showOverlay , setShowOverlay ]  = useState(false)

    useEffect(() => {

      const timer =  setTimeout(() => {
            setShowOverlay(true)
            toast.info('اپلود ممکن است کمی طول بکشد...', {
                position: "top-right",
                autoClose: 3000,  // بعد از ۳ ثانیه بسته میشه
                hideProgressBar: false,
                pauseOnHover: true,
                onClose :() => {
                    setShowOverlay(false)
                },
                progress: undefined,
                
            })
        } ,100)
        
        return () => clearTimeout(timer)
       

    } , [])



    return (
        <>
            <main className='max-w-[1440px] mx-auto  overflow-x-hidden '>
                <Herosection />
                <ProductOne />
            </main>
            <ProdcutBanner />
            <ProductTwo />
            <ProductsTree />
            <BannerTwo />
            <ProductsFour />
            <ProdcutFive />
            <BannerTree />
            <Exercise />
            <TopFooter />    
            <Footer />


            {showOverlay &&  <Overlay/>}


            {showOverlay && <ToastContainer />}
        </>
    )
}

export default Main
