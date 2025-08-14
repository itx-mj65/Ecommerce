import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Filtersidebar from '../Components/Filtersidebar';
import SortOoptions from '../Components/Products/SortOoptions';
import Productsgrid from '../Components/Products/Productsgrid';
const Collectionpage = () => {
    const [products, setproducts] = useState([])
    const [isSidebarOpen, setisSidebarOpen] = useState(false)
    const sidebarref = useRef()
    const togglesidebar = () => {
        setisSidebarOpen(!isSidebarOpen)
    }
    const handleclickoutside = (e) => {
        if (sidebarref.current && !sidebarref.current.contains(e.target)) {
            setisSidebarOpen(false)
        }

    }

    useEffect(() => {
        document.addEventListener("mousedown", handleclickoutside)
        return () => {
            document.removeEventListener("mousedown", handleclickoutside)
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            const fetchedproducts = [
                {
                    _id: 1,
                    name: "Stylish Hoodie",
                    price: 120,
                    images: [{
                        url: "https://picsum.dev/200?random=2",
                        Alttext: "Stylish Hoodie"
                    }]
                },
                {
                    _id: 2,
                    name: "Stylish Leather Jacket",
                    price: 120,
                    images: [{
                        url: "https://picsum.dev/200?random=3",
                        Alttext: "Stylish Leather Jacket"
                    }]
                },
                {
                    _id: 3,
                    name: "Stylish Winter Coat",
                    price: 120,
                    images: [{
                        url: "https://picsum.dev/200?random=4",
                        Alttext: "Stylish Winter Coat"
                    }]
                },
                {
                    _id: 4,
                    name: "Stylish Denim Jacket",
                    price: 120,
                    images: [{
                        url: "https://picsum.dev/200?random=4",
                        Alttext: "Stylish Denim Jacket"
                    }]
                },
                {
                    _id: 5,
                    name: "Stylish Jacket",
                    price: 120,
                    images: [{
                        url: "https://picsum.dev/200?random=5",
                        Alttext: "Stylish Jacket"
                    }]
                },
                {
                    _id: 6,
                    name: "Stylish Jacket",
                    price: 120,
                    images: [{
                        url: "https://picsum.dev/200?random=6",
                        Alttext: "Stylish Jacket"
                    }]
                },
                {
                    _id: 7,
                    name: "Stylish Jacket",
                    price: 120,
                    images: [{
                        url: "https://picsum.dev/200?random=7",
                        Alttext: "Stylish Jacket"
                    }]
                },
                {
                    _id: 8,
                    name: "Stylish Jacket",
                    price: 120,
                    images: [{
                        url: "https://picsum.dev/200?random=8",
                        Alttext: "Stylish Jacket"
                    }]
                },
            ];
            setproducts(fetchedproducts);
        }, 1000);

    }, []);
    return (
        <div className='flex flex-col md:flex-row'>
            {/* filter buton  */}
            <button onClick={togglesidebar} className='lg:hidden p-2 border flex justify-center items-center'>
                <FaFilter /> Filters
            </button>

            <div ref={sidebarref} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 overflow-y-auto  w-68 bg-white shadow-lg transition-transform duration-300 z-50 lg:static  lg:translate-x-0 `}>
                <Filtersidebar />

            </div>
            <div className='flex-grow p-4'>
                <h2 className='text-2xl uppercase mb-4' >All Collection</h2>
                <SortOoptions />
                <Productsgrid products={products} />
            </div>
        </div>
    )
}

export default Collectionpage
