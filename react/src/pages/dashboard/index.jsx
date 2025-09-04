import React from 'react'
import Header from '../../Componetns/Header/header'
import Sidebar from './sideBar/sidebar'
import { Outlet } from 'react-router-dom'
function IndexPage() {
    return (
        <>
            <Header />

            <main className='max-w-[1440px] mx-auto  '>
                <div className="container lg:grid  max-lg:flex max-lg:gap-y-12 max-lg:mb-9 mb-0 max-lg:flex-wrap max-lg:justify-center max-lg:items-center lg:grid-cols-12 sm:mt-10">
                    {/* <div className="lg:grid  max-lg:flex max-lg:gap-y-12 max-lg:mb-9 mb-0 max-lg:flex-wrap max-lg:justify-center max-lg:items-center lg:grid-cols-12 sm:mt-10"> */}
                        <Sidebar />
                        <Outlet />
                    {/* </div> */}
                </div>
            </main>

        </>
    )
}

export default IndexPage
