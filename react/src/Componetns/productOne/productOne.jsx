import React from 'react'
import ProductDetailsOne from '../productDetailsOne/productDetailsOne';


function ProductOne() {
    return (
        <div className='my-[80px] container flex  justify-between items-center'>
            <ProductDetailsOne  title="جدید ترین تخفیفات فصل برند نایک" text = " تخفیف روی تمام محصولات " img="/public/images/main/product.jpg" />
            <ProductDetailsOne  title="جدید ترین تخفیفات فصل برند پوما" text = " تخفیف روی تمام محصولات " img="/public/images/main/product2.png" />
        </div>
    )
}

export default ProductOne
