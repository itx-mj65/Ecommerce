import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitchFill, RiTwitterXLine } from 'react-icons/ri'
import { FiPhoneCall } from 'react-icons/fi'
import { TbBrandMeta } from 'react-icons/tb'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <footer className='border-t py-12'>
            <div className='container mx-auto grid grid-cols-1  md:grid-cols-4 gap-8  px-2 lg:px-0'>
                <div>
                    <h2 className='text-lg text-gray-800 mb-4 font-bold'>Newsletter</h2>
                    <p className='text-gray-500 mb-4'>Be the first to hear about new products , exclusive events and online offers.</p>
                    <p className='font-semibold text-gray-500 text-sm mb-6'>Sign up and get 10% discount on your first order</p>

                    <form className='flex'>
                        <input type="email" placeholder='Enter your email' className='p-3 w-full text-sm border-t border-l border-gray-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all ' required />
                        <button className='bg-black text-white rounded-r-md hover:bg-gray-800 transition-all px-4 py-3'>Subscribe</button>
                    </form>
                </div>
                <div>
                    <h3 className='text-lg text-gray-800 mb-4 '>Shop</h3>
                    <ul className='space-y-2 text-gray-600'>
                        <li>
                            <Link to='#' className='hover:text-gray-500' >Men's Top Wear</Link>
                        </li>
                        <li>
                            <Link to='#' className='hover:text-gray-500' >Men's Bottom Wear</Link>
                        </li>
                        <li>
                            <Link to='#' className='hover:text-gray-500' >Women's Top Wear</Link>
                        </li>
                        <li>
                            <Link to='#' className='hover:text-gray-500' >Women's Bottom Wear</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg text-gray-800 mb-4 '>Support</h3>
                    <ul className='space-y-2 text-gray-600'>
                        <li>
                            <Link to='#' className='hover:text-gray-500' >Contact Us</Link>
                        </li>
                        <li>
                            <Link to='#' className='hover:text-gray-500' >About Us</Link>
                        </li>
                        <li>
                            <Link to='#' className='hover:text-gray-500' >FAQ's</Link>
                        </li>
                        <li>
                            <Link to='#' className='hover:text-gray-500' >Features</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-gray-800 mb-4'> Follow Us </h3>
                    <div className='flex items-center space-x-4 mb-6 '>
                        <a href="https://www.feacebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-gray-500'>
                            <TbBrandMeta className='h-6 w-6' /> </a>
                        <a href="https://www.feacebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-gray-500'>
                            <IoLogoInstagram className='h-6 w-6' /> </a>
                        <a href="https://www.feacebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-gray-500'>
                            <RiTwitterXLine className='h-5 w-5' /> </a>
                    </div>
                    <p className='text-gray-500'>Call Us </p>
                    <p><FiPhoneCall className='mr-2 inline-block' /> +92 345 6789725  </p>
                </div>


            </div>

            <div className='container mx-auto mt-12 lg:px-0 border-t border-gray-200 pt-6'>
                <p className='text-gray-500 text-sm tracking-tighter text-center '>© 2025 MJDEV. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
