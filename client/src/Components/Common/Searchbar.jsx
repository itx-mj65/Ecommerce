import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'

const Searchbar = () => {
    const [searchterm, setsearchterm] = useState("")
    const [isopen, setisopen] = useState(false)
    const handlesearch = () => {
        setisopen(!isopen)
    }

    const handlesubmit =(e)=>{
        e.preventDefault()
        console.log(searchterm)
        setisopen(false)
    }
    return (
        <div className={`flex items-center justify-center w-full transition-all duration-300  ${isopen ? "absolute top-0 left-0 h-24 z-50 bg-white" : "w-auto"}  `}  >

            {isopen ? <form  onSubmit={handlesubmit} className='relative flex items-center justify-center w-full ' >
                <div className='relative  w-1/2'>
                    <input type="text" placeholder='Serach' value={searchterm} onChange={(e)=>setsearchterm(e.target.value)} className='bg-gray-200 px-4 py-2 pl-2 pr-12 rounded-lg w-full focus:outline-none placeholder:text-gray-700' />

                    <button className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer' ><HiMagnifyingGlass className='h-6 w-6 ' /></button>
                </div>
                <button className='absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer' onClick={handlesearch}>
                    <HiMiniXMark size={25} />
                </button>
            </form> : <button onClick={handlesearch}  > <HiMagnifyingGlass className='h-6 w-6 cursor-pointer' />  </button>}

        </div>
    )
}

export default Searchbar