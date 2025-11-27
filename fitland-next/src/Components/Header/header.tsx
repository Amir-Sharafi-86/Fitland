"use client"
import React, { useState } from 'react'
import Topbar from '../Topbar/topbar'
import Navbar from '../Navbar/navbar'

function Header() {
    const [isShow, setIsShow] = useState<boolean>(false)

    return (
        <header
            className={`relative bg-white ${
                isShow ? 'max-md:z-50' : ''   
            }`}
        >
            <Topbar />

            <Navbar isShow={isShow} setIsShow={setIsShow} />
        </header>
    )
}

export default Header
