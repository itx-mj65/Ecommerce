import React from 'react'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
const Topbar = () => {
    return (
        <>
            <div className='bg-rabbit-red text-white'>
                <div className='container mx-auto flex items-center justify-between px-4 py-3'>
                    <div className='hidden md:flex items-center space-x-4'>
                        <a href="3" className='hover:text-gray-300'>
                            <TbBrandMeta className='h-5 w-5' />

                        </a>
                        <a href="3" className='hover:text-gray-300'>
                            <IoLogoInstagram className='h-5 w-5' />

                        </a>
                        <a href="3" className='hover:text-gray-300'>
                            <RiTwitterXLine className='h-4 w-4' />

                        </a>
                    </div>
                    <div className='text-sm text-center flex-grow '>
                        <span>We Ship Worldwide - Fast & Reliable  Shipping</span>
                    </div>
                    <div className='hidden md:block  text-sm text-center'>
                        <a href="tel:+921234567890" className='hover:text-gray-300'> +92 (123) 4567890 </a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Topbar