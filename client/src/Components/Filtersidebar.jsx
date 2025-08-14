import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

const Filtersidebar = () => {
    const [searchparams, setsearchparams] = useSearchParams()
    const navigate = useNavigate()
    const [filters, setfilters] = useState({
        category: "",
        gender: "",
        color: "",
        size: [],
        brand: [],
        material: [],
        minprice: 0,
        maxprice: 1000,

    })
    const [priceRange, setpriceRange] = useState([0, 1000])
    const categories = ["Top Wear", "Bottom Wear"]
    const colors = ["Red", "Blue", "Green", "Black", "White", "yellow", "pink", "Beige", "navy", "gray"]
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
    const materials = ["Cotton", "Polyester", "Wool", "Leather", "Denim", "Silk", "Linen", "Rayon", "Acrylic", "Nylon"]
    const brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour", "New Balance", "Asics", "Skechers", "Fila", "Converse"]
    const genders = ["Mens", "Womens"]

    useEffect(() => {
        const params = Object.fromEntries([...searchparams])
        setfilters({
            category: params.category || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            minprice: params.minprice || 0,
            maxprice: params.maxprice || 1000,

        })
        setpriceRange([0, params.maxprice || 1000])
    }, [searchparams])

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target
        let newFilters = { ...filters }
        if (type === "checkbox") {
            if (checked) {
                newFilters[name] = [...newFilters[name] || [], value]
            } else {
                newFilters[name] = newFilters[name].filter(item => item !== value)
            }
        }else{
            newFilters[name] = value
        }
        setfilters(newFilters)
        updateURLparams(newFilters)
    }

    const updateURLparams= (newFilters)=>{
        const params = new URLSearchParams()
        for (const key in newFilters) {
            if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
                params.set(key, newFilters[key].join(","))
            } else if (newFilters[key] !== "") {
                params.set(key, newFilters[key])
            }
        }
        setsearchparams(params)
        navigate(`?${params.toString()}`)
    }
    const handlePriceChange = (e) => {
        const value = e.target.value
        setpriceRange([0, value])
        const newFilters = { ...filters, maxprice: value }
        setfilters(newFilters)
        updateURLparams(newFilters)
    }
    return (
        <div className='p-4'>
            <h3 className='text-xl font-medium text-gray-800 mb-4'>Filters</h3>

            {/* category filters  */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2' >Category</label>
                {categories.map((category) => (
                    <div key={category} className='flex items-center mb-1'>
                        <input type="radio" checked={filters.category === category} value={category} onChange={handleFilterChange} className='mr-2 h-4 w-4   text-blue-500 focus:ring-blue-400 border-gray-300' name='category' />
                        <span className='text-gray-700'>{category}</span>
                    </div>
                ))}
            </div>
            {/* gender section  */}

            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2' >Gender</label>
                {genders.map((gender) => (
                    <div key={gender} className='flex items-center mb-1'>
                        <input type="radio" checked={filters.gender === gender} value={gender} onChange={handleFilterChange} className='mr-2 h-4 w-4  text-blue-500 focus:ring-blue-400 border-gray-300' name='gender' />
                        <span className='text-gray-700'>{gender}</span>
                    </div>
                ))}
            </div>

            {/* colrs section  */}

            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2' >Colors</label>
                <div className='flex flex-wrap gap-2'>
                    {colors.map((color) => (
                        <button key={color} name='color'  value={color} onClick={handleFilterChange} className={`w-7 h-7 rounded-full border-gray-300 transition border cursor-pointer hover:scale-110 ${filters.color === color ? "ring-2 ring-blue-500":" "}`} style={{ backgroundColor: color.toLowerCase() }} ></button>
                    ))}
                </div>

            </div>

            {/* size section  */}

            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2' >Size</label>
                {sizes.map((size) => (
                    <div key={size} className='flex items-center mb-1'>
                        <input type="checkbox" checked={filters.size.includes(size)} value={size} onChange={handleFilterChange} className='mr-2 h-3 w-3   text-blue-500 focus:ring-blue-400 border-gray-300' name='size' />
                        <span className='text-gray-700'>{size}</span>
                    </div>
                ))}
            </div>
            {/* brand section  */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2' >Brand</label>
                {brands.map((brand) => (
                    <div key={brand} className='flex items-center mb-1'>
                        <input type="checkbox" value={brand} checked={filters.brand.includes(brand)} onChange={handleFilterChange} className='mr-2 h-3 w-3   text-blue-500 focus:ring-blue-400 border-gray-300' name='brand' />
                        <span className='text-gray-700'>{brand}</span>
                    </div>
                ))}
            </div>
            {/* material section  */}
            <div className='mb-6'>
                <label className='block text-gray-600 font-medium mb-2' >Material</label>
                {materials.map((material) => (
                    <div key={material} className='flex items-center mb-1'>
                        <input type="checkbox" checked={filters.material.includes(material)} value={material} onChange={handleFilterChange} className='mr-2 h-3 w-3   text-blue-500 focus:ring-blue-400 border-gray-300' name='material' />
                        <span className='text-gray-700'>{material}</span>
                    </div>
                ))}
            </div>

            <div className='mb-8'>
                <label className='block text-gray-600 font-medium mb-2' >Price</label>
                <input type="range" value={priceRange[1]} onChange={handlePriceChange} min={0} max={1000} name='priceRange' className='w-full h-2 rounded-lg cursor-pointer bg-gray-300 appearance-none' />
                <div className='flex justify-between mt-2 text-gray-600'>
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                </div>

            </div>
        </div>
    )
}

export default Filtersidebar