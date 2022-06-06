import React from 'react'
import Logo from "../film.png"
import {Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <div className='flex space-x-7 md:space-x-14 border items-center pl-7 md:pl-14 py-4'>
                <img src={Logo} className=' h-9 md:h-10' />
                <Link to="/" className=' text-blue-400 font-bold text-xl  md:text-3xl'>Movies</Link>
                <Link to="/favourites" className=' text-blue-400 font-bold text-xl md:text-3xl'>Favourites</Link>
            </div>
        </>
    )
}

export default NavBar