import React from 'react'
const selectedProduct = {
    name: "Stylish Jacket",
    originalPrice: 150,
    price: 120,
    desciption: "A stylish jacket made from high-quality materials, perfect for any occasion. Available in various sizes and colors.",
    category: "Jackets",
    brand: "FashionHub",
    material: "leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Navy"],
    images: [{
        url: "https://picsum.dev/200?random=2",
        Alttext: "Stylish Jacket 1"
    },
    {
        url: "https://picsum.dev/200?random=3",
        Alttext: "Stylish Jacket 2"
    }]
}

const ProductDetails = () => {
    return (
        <div className='p-6'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
                <div className='flex flex-col md:flex-row'>
                    <div className='hidden md:flex flex-col space-y-4 mr-6'>
                        {selectedProduct.images.map((image, index) => (
                            <img key={index} src={image.url} alt={image.Alttext || `Image ${index + 1}`} className='w-24 h-24 object-cover rounded-lg cursor-pointer' />
                        ))}
                    </div>
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img src={selectedProduct.images[0].url} alt={selectedProduct.images[0].Alttext || "Main Image"} className='w-full h-auto object-cover rounded-lg' />
                        </div>
                    </div>

                    {/* mobile thumbnail */}
                    <div className='md:hidden overscroll-x-scroll  flex space-x-4 mb-4'>
                        {selectedProduct.images.map((image, index) => (
                            <img key={index} src={image.url} alt={image.Alttext || `Image ${index + 1}`} className='w-20 h-20 object-cover rounded-lg cursor-pointer' />
                        ))}
                    </div>

                    {/* right side details  */}
                    <div className='md:w-1/2 md:ml-10'>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-2' >{selectedProduct.name}</h1>
                        <p>{selectedProduct.originalPrice && <span className='line-through text-gray-600 mb-1'>${selectedProduct.originalPrice}</span>}</p>
                        <p className='text-xl font-semibold text-red-600 mb-4'>${selectedProduct.price}</p>
                        <p className='text-gray-700 mb-4'>{selectedProduct.desciption}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails