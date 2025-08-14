import React from 'react'
import Herosection from '../Herosection/Herosection'
import ProductOne from '../productOne/productOne'
import ProdcutBanner from '../prodcutBanner/prodcutBanner'
import ProductTwo from '../ProductTwo/productTwo'
import ProductsTree from '../productsTree/productsTree'
import BannerTwo from '../bannerTwo/bannerTwo'
import ProductsFour from '../productsFour/productsFour'
function Main() {
    return (
        <div>
            <main className='max-w-[1440px] mx-auto  overflow-x-hidden '>
                <Herosection />
                <ProductOne />
            </main>
            <ProdcutBanner />
            <ProductTwo />
            <ProductsTree />
            <BannerTwo />
            <ProductsFour />
        </div>
    )
}

export default Main
