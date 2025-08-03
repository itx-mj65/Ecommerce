import React from 'react'
import { Link } from 'react-router'

const Productsgrid = ({ products }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {products.map((product) => {
                return (
                    <Link to={`/product/${product._id}`} key={product._id} className='block'>
                        <div className='bg-white rounded-lg p-4'>
                            <div className='w-full h-90 mb-4' >
                                <img src={product.images[0].url} alt={product.images[0].Alttext || product.name}
                                className='h-full w-full object-cover rounded-lg' />
                            </div>
                            <h3 className='text-m font-semibold mb-2'>{product.name}</h3>
                            <p className='text-sm  tracking-tighter'>${product.price.toLocaleString()}</p>
                        </div>
                    </Link>
                )
            })}


        </div>
    )
}

export default Productsgrid