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
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import Loading from '../loading/loading'


function Main() {
    const [showOverlay , setShowOverlay ]  = useState(false)
    const [loading , setLoding ]  = useState(false)
    
    useEffect(() => {
        setShowOverlay(true); 

        toast.info(
                'اپلود ممکن است کمی طول بکشد...', {
                position: "top-right",
                autoClose: 2000,
                closeButton : false,
                style: { color: '#1565C0', fontWeight: 'bold',}   ,
                progress: undefined,
                
            })

        setLoding(true)
        const timer = setTimeout(() => {
          setShowOverlay(false); 
          setLoding(false)
        }, 100);
      
        return () => clearTimeout(timer); 
      }, []);
      



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




            {showOverlay && <ToastContainer style={{zIndex:100001 , }}  />}
            {loading && <Loading />}
        </>
    )
}

export default Main




