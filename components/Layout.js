import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

export default function Layout({children}) {
    return (
        <>
        <NavBar/>
        <main className="bg-navy-dark px-4 lg:px-9">
            {children}
        </main>
        <Footer/>
        </>
    )
}