import React from 'react'
import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from 'react-icons/hi2'

const FeatureSection = () => {
    return (<section className='py-16 px-4 bg-white'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center'>
            {/* section 1  */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-4'>
                    <HiShoppingBag className='text-xl' />
                </div>
                <h2 className='tracking-tighter mb-2 uppercase'>Free International shipping</h2>
                <p className='tracking-tighter text-sm text-gray-600 capitalize'>on all orders over $100.00</p>
            </div>

            {/* section 2  */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-4'>
                    <HiArrowPathRoundedSquare className='text-xl' />
                </div>
                <h2 className='tracking-tighter mb-2 uppercase'>$5 Days Return</h2>
                <p className='tracking-tighter text-sm text-gray-600 capitalize'>Money Back Guarantee</p>
            </div>

            {/* section 3  */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-4'>
                    <HiOutlineCreditCard className='text-xl' />
                </div>
                <h2 className='tracking-tighter mb-2 uppercase'>Secure Payment</h2>
                <p className='tracking-tighter text-sm text-gray-600 capitalize'>100% Secure Payment Processing</p>
            </div>

        </div>
    </section>
    )
}

export default FeatureSection