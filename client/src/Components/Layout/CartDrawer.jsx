import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Cartcontent from '../Cart/Cartcontent'
import { useNavigate } from 'react-router'

const CartDrawer = ({ carttoggle, togglecart }) => {
    const navigate = useNavigate()
    const handleCheckout = () => {
        togglecart()
        navigate('/checkout')
    }



    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${carttoggle ? "translate-x-0" : "translate-x-full"}`} >

            <div className='flex justify-end p-4' onClick={togglecart}>
                <IoMdClose size={25} />
            </div>

            {/* cart content  */}

            <div className='flex-grow p-4  overflow-y-auto'>
                <h2 className='text-xl font-semibold mb-4' >Your Cart </h2>
                <Cartcontent />
            </div>





            {/* checkout button  */}
            <div className='p-4 sticky bottom-0'>
                <button onClick={handleCheckout} className='w-full bg-black text-white py-3 hover:bg-gray-800 transition rounded-lg cursor-pointer' >Checkout</button>
                <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>Shipping taxes and discount codes are calculated at checkout</p>
            </div>

        </div>
    )
}

export default CartDrawer