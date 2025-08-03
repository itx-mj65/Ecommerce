import React from 'react'
import { Link } from 'react-router'
import Featured from "../../assets/featured.webp"
const FeaturedCollection = () => {
    return (
        <section className='py-16 px-4 lg:px-0 '>


            <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl'>
                {/* left section  */}
                <div className='lg:w-1/2 lg:text-left p-8 text-center'>
                    <h2 className='text-lg font-semibold text-gray-700 mb-2 '>
                        Comfortable and Stylish
                    </h2>
                    <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
                        Apparel Made For Your Everyday Life
                    </h2>
                    <p className='text-gray-600 mb-6 text-lg'>
                        Discover our latest collection of apparel designed for comfort and style. Perfect for any occasion, our pieces are crafted with care to ensure you look and feel your best.
                    </p>
                    <Link to='/collections/all' className='bg-black text-white py-3 px-6 rounded-lg text-lg hover:bg-gray-900 transition-colors duration-300'>Shop Now</Link>

                </div>
                {/* right section  */}
                <div className='lg:w-1/2'>
                    <img src={Featured} alt="Featured Collection" className='w-full h-auto object-cover  rounded-tr-3xl rounded-br-3xl' />
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollection
