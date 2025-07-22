import React from 'react'
import { Link } from 'react-router'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import Searchbar from './Searchbar'
const Navbar = () => {
    return (
        <>

            <nav className='flex mx-auto container justify-between items-center px-6 py-4'>
                <div>
                    <Link to='/' className='text-2xl font-medium ' >Logo</Link>
                </div>
                <div className='hidden md:flex  space-x-6 '>
                    <Link to='#' className='text-gray-700 font-medium hover:text-black text-sm uppercase' >Mens</Link>
                    <Link to='#' className='text-gray-700 font-medium hover:text-black text-sm uppercase' >Womens</Link>
                    <Link to='#' className='text-gray-700 font-medium hover:text-black text-sm uppercase' >Top Wears</Link>
                    <Link to='#' className='text-gray-700 font-medium hover:text-black text-sm uppercase' >Bottom Wears</Link>
                </div>
                <div className='flex space-x-4'>
                    <Link to="/profile" className='hover:text-black' > <HiOutlineUser className='h-6 w-6 text-gray-700' /> </Link>
                    <button className='relative hover:text-black'><HiOutlineShoppingBag className='h-6 w-6 text-gray-700' /> <span className='absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5'>4</span></button>

                   <Searchbar/>

                    <button><HiBars3BottomRight className='h-6 w-6 text-gray-700 md:hidden' /></button>
                </div>
            </nav>

        </>
    )
}

export default Navbar