import React from 'react'
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
function Main() {
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

            <footer className='bg-midnight pt-9  lg:pt-15'>
                <Footer></Footer>
            </footer>
        </>
    )
}

export default Main
