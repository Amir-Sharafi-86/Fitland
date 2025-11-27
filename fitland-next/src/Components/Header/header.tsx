"use client"
import React from 'react'
import { useState } from 'react'
import Topbar from '../Topbar/topbar'
import Navbar from '../Navbar/navbar'
function Header() {
      const [isShow , setIsShow ] = useState<boolean>(false)
      console.log(isShow);
      
    return (
        
        <header className={`relative max-md:z-50 bg-white `}>
            <Topbar />
            
            <Navbar  />
        </header>            

    )
}

export default Header
