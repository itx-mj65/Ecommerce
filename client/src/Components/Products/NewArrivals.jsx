import React, { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router'
// import "../../index.css"

const NewArrivals = () => {
    const scrollref = useRef()
    const [isDragging, setisDragging] = useState(false)
    const [startX, setstartX] = useState(0)
    const [scrollLeft, setscrollLeft] = useState(false)
    const [canScrollRight, setcanScrollRight] = useState(true)
    const [canScrollLeft, setcanScrollLeft] = useState(false)
    const newArrivals = [
        {
            _id: 0,
            name: "Stylish Jacket",
            price: 120,
            image: [{
                url: "https://picsum.dev/200?random=2",
                Alttext: "Stylish Jacket"
            }]
        },
        {
            _id: 1,
            name: "Stylish Jacket",
            price: 120,
            image: [{
                url: "https://picsum.dev/200?random=3",
                Alttext: "Stylish Jacket"
            }]
        },
        {
            _id: 2,
            name: "Stylish Jacket",
            price: 120,
            image: [{
                url: "https://picsum.dev/200?random=1",
                Alttext: "Stylish Jacket"
            }]
        },
        {
            _id: 3,
            name: "Stylish Jacket",
            price: 120,
            image: [{
                url: "https://picsum.dev/200?random=4",
                Alttext: "Stylish Jacket"
            }]
        },
        {
            _id: 4,
            name: "Stylish Jacket",
            price: 120,
            image: [{
                url: "https://picsum.dev/200?random=5",
                Alttext: "Stylish Jacket"
            }]
        },
        {
            _id: 5,
            name: "Stylish Jacket",
            price: 120,
            image: [{
                url: "https://picsum.dev/200?random=6",
                Alttext: "Stylish Jacket"
            }]
        },
        {
            _id: 6,
            name: "Stylish Jacket",
            price: 120,
            image: [{
                url: "https://picsum.dev/200?random=7",
                Alttext: "Stylish Jacket"
            }]
        },
        {
            _id: 7,
            name: "Stylish Jacket",
            price: 120,
            image: [{
                url: "https://picsum.dev/200?random=8",
                Alttext: "Stylish Jacket"
            }]
        }
    ]

    const scroll = (direction) => {
        const scrollamount = direction == "left" ? -300 : 300;
        scrollref.current.scrollBy({ left: scrollamount, behavior: 'smooth' })
    }

    const updateScollButton = () => {
        const container = scrollref.current;
        if (container) {
            const scrollLeft = container.scrollLeft;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            setcanScrollLeft(scrollLeft > 0);
            setcanScrollRight(Math.ceil(scrollLeft) < Math.ceil(maxScrollLeft));
        }
        
    };


    useEffect(() => {
        const container = scrollref.current
        if (container) {
            container.addEventListener("scroll", updateScollButton)
            return ()=> container.removeEventListener("scroll", updateScollButton)
        }

    },[])
    const handleMouseDown = (e) => {
        setisDragging(true);
        
        setstartX(e.pageX - scrollref.current.offsetLeft);
        setscrollLeft(scrollref.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollref.current.offsetLeft;
        const walk = x - startX;
        scrollref.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUporLeave = () => {
        setisDragging(false);
    };


    return (
        <section className='overflow-hidden py-16 px-4 lg:px-0'>
            <div className='container mx-auto text-center mb10 relative '>
                <h2 className='text-3xl font-bold mb-4 '>Explore New Arrivals</h2>
                <p className='text-lg text-gray-600 mb-8 capitalize'>
                    Discover the latest styles straight from the runway, freshly added to kepp your wardrbe on the cutting edge of fashion.
                </p>
                <div className='absolute right-0 bottom-[-30px] flex space-x-2'>
                    <button className={`p-2 rounded-full border cursor-pointer ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`} onClick={() => scroll("left")} disabled={!canScrollLeft} ><FiChevronLeft className='text-2xl' /></button>
                    <button className={`p-2 rounded-full border cursor-pointer ${canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`} onClick={() => scroll("right")} disabled={!canScrollRight} ><FiChevronRight className='text-2xl' /></button>
                </div>
            </div>
            <div ref={scrollref}
                onMouseMove={handleMouseMove}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseUporLeave}
                onMouseUp={handleMouseUporLeave}

                className={`container mx-auto overflow-x-scroll flex space-x-6 relative  hide-scrollbar ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}>
                {newArrivals.map((product) => (
                    <div key={product._id} className='min-w-[100%]  sm:min-w-[50%] lg:min-w-[30%] relative'>
                        <img src={product.image[0]?.url} alt={product.image[0]?.Alttext || product.name} className='w-full h-[500px] object-cover rounded-lg' draggable={false} />
                        <div className='absolute right-0 left-0 bottom-0  backdrop-blur-md text-white p-4 rounded-b-lg z-50 '>
                            <Link to={`/product/${product._id}`} className='block'>
                                <h2 className='font-medium'>{product.name}</h2>
                                <p className='mt-1'>$ {product.price}</p></Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NewArrivals
