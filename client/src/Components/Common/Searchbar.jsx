import React, { useState } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'

const Searchbar = () => {
    const [searchterm, setsearchterm] = useState("")
    const [isopen, setisopen] = useState(false)
    return (
        <div>

{isopen ? <form ></form> : <button> <HiMagnifyingGlass />  </button>  }

        </div>
    )
}

export default Searchbar