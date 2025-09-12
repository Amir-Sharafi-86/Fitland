import React from 'react'
import Topbar from '../Topbar/topbar'
import Navbar from '../Navbar/navbar'
function Header() {
    return (
        
        <header className='relative max-md:z-50 bg-white'>
            <Topbar />
            
            <Navbar  />
        </header>            

    )
}

export default Header
