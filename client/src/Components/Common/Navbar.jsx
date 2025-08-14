import React, { useState } from 'react'
import { Link } from 'react-router'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import Searchbar from './Searchbar'
import CartDrawer from '../Layout/CartDrawer'
import { IoMdClose } from 'react-icons/io'
const Navbar = () => {
    const [carttoggle, setcarttoggle] = useState(false)
    const [navDraweropen, setnavDraweropen] = useState(false)
    const togglenavdrawer = () => {
        setnavDraweropen(!navDraweropen)
    }

    const togglecart = () => {
        setcarttoggle(!carttoggle)
    }
    return (
        <>

            <nav className='flex mx-auto container justify-between items-center px-6 py-4'>
                <div>
                    <Link to='/' className='text-2xl font-medium ' >Logo</Link>
                </div>
                <div className='hidden md:flex  space-x-6 '>
                    <Link to='/collections/all' className='text-gray-700 font-medium hover:text-black text-sm uppercase' >Mens</Link>
                    <Link to='#' className='text-gray-700 font-medium hover:text-black text-sm uppercase' >Womens</Link>
                    <Link to='#' className='text-gray-700 font-medium hover:text-black text-sm uppercase' >Top Wears</Link>
                    <Link to='#' className='text-gray-700 font-medium hover:text-black text-sm uppercase' >Bottom Wears</Link>
                </div>
                <div className='flex items-center  space-x-4'>
                    <Link to="/profile" className='hover:text-black' > <HiOutlineUser className='h-6 w-6 text-gray-700' /> </Link>
                    <button className='relative hover:text-black cursor-pointer' onClick={togglecart}><HiOutlineShoppingBag className='h-6 w-6 text-gray-700' /> <span className='absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5'>4</span></button>


                    <div className='overflow-hidden'>

                        <Searchbar />
                    </div>

                    <button onClick={togglenavdrawer} ><HiBars3BottomRight className='h-6 w-6 text-gray-700 md:hidden' /></button>
                </div>
            </nav>

            <CartDrawer carttoggle={carttoggle} togglecart={togglecart} />


            <div className={`fixed top-0 left-0 w-1/2 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDraweropen ? "translate-x-0" : "-translate-x-full"} `}>

                <div className='flex justify-end p-4'>
                    <button> <IoMdClose className='h-6 w-6 text-gray-600 cursor-pointer' onClick={togglenavdrawer} /> </button>
                </div>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                    <nav className='space-y-4'>
                        <Link to="/collections" onClick={togglenavdrawer} className='block text-gray-600 hover:text-black' >Mens</Link>
                        <Link to="#" onClick={togglenavdrawer} className='block text-gray-600 hover:text-black' >Womens</Link>
                        <Link to="#" onClick={togglenavdrawer} className='block text-gray-600 hover:text-black' >Top Wear</Link>
                        <Link to="#" onClick={togglenavdrawer} className='block text-gray-600 hover:text-black' >Mens</Link>
                        <Link to="#" onClick={togglenavdrawer} className='block text-gray-600 hover:text-black' >Bottom Wear</Link>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Navbar