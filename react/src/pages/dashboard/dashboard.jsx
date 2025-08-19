import React from 'react'
import Header from '../../Componetns/Header/header'

function Dashboard() {
    return (
        <>
            <Header></Header>

            <main className='max-w-[1440px]'>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className='sidebar  col-span-3'>

                        </div>
                        //!Content User 
                        <div className='col-span-9'></div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Dashboard
