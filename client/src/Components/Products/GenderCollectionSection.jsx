import React from 'react'
import mencollectionimage from '../../assets/mens-collection.webp'
import womencollectionimage from '../../assets/womens-collection.webp'
import { Link } from 'react-router'

const GenderCollectionSection = () => {
    return (
        <section className='py-16 px-4  lg:px-0' >
            <div className='container mx-auto flex flex-col md:flex-row gap-8'>
                {/* womens section  */}
                <div className='relative flex-1'>
                    <img src={womencollectionimage} alt="Womens Collection" className='w-full object-cover h-[660px]' />
                    <div className='absolute left-8 bottom-8 bg-white/90 p-4 '>
                        <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                            Women's Collection</h2>
                        <Link to='/collections/all?gender=Women' className='text-gray-900 underline'  >Shop Now</Link></div>
                </div>

                {/* mens section  */}
                <div className='relative flex-1'>
                    <img src={mencollectionimage} alt="Men's Collection" className='w-full object-cover h-[660px]' />
                    <div className='absolute left-8 bottom-8 bg-white/90 p-4 '>
                        <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                            Men's Collection</h2>
                        <Link to='/collections/all?gender=Men' className='text-gray-900 underline'  >Shop Now</Link></div>
                </div>
            </div>
        </section>
    )
}

export default GenderCollectionSection
