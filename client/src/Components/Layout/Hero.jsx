import React from 'react'
import heroimg from "../../assets/rabbit-hero.webp"
import { Link } from 'react-router'

const Hero = () => {
  return (
   <section className='relative'>
    <img src={heroimg} alt="" className='w-full h-[400px] md:h-[570px] lg:h-[670px] object-cover' />
    <div className='absolute inset-0  bg-black/20 flex items-center justify-center '>
        <div className="text-center text-white p-6">
            <h1 className='text-4xl md:text-8xl tracking-tighter font-bold uppercase mb-4'>
                Vocation <br/> ready
            </h1>
            <p className='text-sm tracking-tighter md:text-lg mb-6 capitalize' >
            explore our vocatio-ready outfits with fast worldwide shipping.
            </p>
            <Link to='#' className='bg-white text-gray-950 px-6 py-2 rounded-sm text-lg' >Shop Now</Link>
        </div>
    </div>
   </section>
  )
}

export default Hero
