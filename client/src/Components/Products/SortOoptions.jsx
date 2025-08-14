import React from 'react'
import { useSearchParams } from 'react-router'

const SortOoptions = () => {
    const [searchparams, setsearchparams] = useSearchParams()
    const handlesort=(e)=>{
        const sortBy = e.target.value
        searchparams.set("sortBy", sortBy)
        setsearchparams(searchparams)
    }
    return (
        <div className='flex items-center justify-end mb-4'>
            <select id="sort" onChange={handlesort} value={searchparams.get("sortBy")|| ""} className='p-2 focus:outline-none border rounded-md'>
                <option value="default">Sort By</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="popularity">Popularity</option>
            </select>
        </div>
    )
}

export default SortOoptions