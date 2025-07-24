import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const cartproducts = [
    {
        productId: 1,
        name: "T-Shirt",
        size: "L",
        color: "black",
        quantity: 1,
        price: 20,
        image: "https://picsum.dev/200"
    },
    {
        productId: 2,
        name: "Pant",
        size: "M",
        color: "blue",
        quantity: 1,
        price: 24,
        image: "https://picsum.dev/200?random=2"
    }
]

const Cartcontent = () => {
    return (
        <div>
            {
                cartproducts.map((product, index) => (
                    <div key={index} className='flex items-start justify-between p-4 border-b'  >
                        <div className='flex items-center'>
                            <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4 rounded' />
                            <div className='h-full '>
                                <h3 className='font-semibold text-sm'>{product.name}</h3>
                                <p className='text-sm text-gray-500' >  Size : {product.size} | Colour : {product.color}  </p>
                                <div className='flex items-center mt-2'>
                                    <button className='border rounded px-2 py-0 cursor-pointer text-xl font-medium border-gray-300' >-</button>
                                    <span className='mx-4'>{product.quantity}</span>
                                    <button className='border rounded px-2 py-0 cursor-pointer  border-gray-300 text-xl font-medium' >+</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>$ {product.price.toLocaleString()}</p>
                            <button> <RiDeleteBin3Line  className='h-6 w-6 mt-2 text-red-600 ml-1.5' />  </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cartcontent