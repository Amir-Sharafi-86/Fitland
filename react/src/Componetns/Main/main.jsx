import React from 'react'
import Herosection from '../Herosection/Herosection'
import ProductOne from '../productOne/productOne'
import ProdcutBanner from '../prodcutBanner/prodcutBanner'
import ProductTwo from '../ProductTwo/productTwo'
function Main() {
    return (
        <div>
            <main className='max-w-[1440px] mx-auto  overflow-x-hidden '>
                <Herosection />
                <ProductOne />
            </main>
            <ProdcutBanner />
            <ProductTwo />
        </div>
    )
}

export default Main
