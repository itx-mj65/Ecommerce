import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import Productsgrid from './Productsgrid';
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

const similarProducts = [
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
]

const ProductDetails = () => {
    const [mainimage, setMainImage] = useState(selectedProduct.images[0].url);
    const [selectedSize, setselectedSize] = useState("")
    const [selectedColor, setselectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isbuttonDisabled, setIsButtonDisabled] = useState(false);
    useEffect(() => {
        if (selectedProduct.images.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }else {
            setMainImage("https://picsum.dev/200?random=1");
        }
    }, [selectedProduct]);

    const handlequantity = (action) => {
        if (action == "plus") setQuantity((prev) => prev + 1)
        if (action == "minus" && quantity > 1) setQuantity((prev) => prev - 1)
    }
    const handleaddtocart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select a size and color", { duration: 1000 });
            return;

        }
        setIsButtonDisabled(true);
        setTimeout(() => {
            toast.success("Product added to cart", { duration: 1000 });
            setIsButtonDisabled(false);
        }, 500);
    }
    return (
        <div className='p-6'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
                <div className='flex flex-col md:flex-row'>
                    <div className='hidden md:flex flex-col space-y-4 mr-6'>
                        {selectedProduct.images.map((image, index) => (
                            <img key={index} src={image.url} onClick={() => setMainImage(image.url)} alt={image.Alttext || `Image ${index + 1}`} className={`w-24 h-24 object-cover rounded-lg cursor-pointer ${mainimage == image.url ? "border-black border-2 shadow-xl" : "border-gray-200"}`} />
                        ))}
                    </div>
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img src={mainimage} alt={selectedProduct.images[0].Alttext || "Main Image"} className='w-full h-auto object-cover rounded-lg' />
                        </div>
                    </div>

                    {/* mobile thumbnail */}
                    <div className='md:hidden overscroll-x-scroll  flex space-x-4 mb-4'>
                        {selectedProduct.images.map((image, index) => (
                            <img key={index} src={image.url} onClick={() => setMainImage(image.url)} alt={image.Alttext || `Image ${index + 1}`} className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${mainimage == image.url ? "border-black border-2 shadow-xl" : "border-gray-200"}`} />
                        ))}
                    </div>

                    {/* right side details  */}
                    <div className='md:w-1/2 md:ml-10'>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-2' >{selectedProduct.name}</h1>
                        <p>{selectedProduct.originalPrice && <span className='line-through text-gray-600 mb-1'>${selectedProduct.originalPrice}</span>}</p>
                        <p className='text-xl font-semibold text-red-600 mb-4'>${selectedProduct.price}</p>
                        <p className='text-gray-700 mb-4'>{selectedProduct.desciption}</p>

                        <div className='mb-4'>
                            <p className='text-gray-700'>Color :</p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.colors.map((color, index) => (
                                    <button key={index} onClick={() => setselectedColor(color)}
                                        className={`inline-block w-8 h-8 border rounded-full ${selectedColor == color ? "border-4 border-black" : "border-gray-200"}  `} style={{ backgroundColor: color.toLocaleLowerCase(), filter: "brightness(0.5)" }}></button>
                                ))}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <p className='text-gray-700'>Size :</p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.sizes.map((size, index) => (
                                    <button key={index} className={`inline-block w-8 h-8 border rounded cursor-pointer ${selectedSize == size ? "bg-black text-white" : "border-gray-200"}`} onClick={() => setselectedSize(size)}>{size}</button>
                                ))}
                            </div>
                        </div>

                        <div className='mb-6'>
                            <p className='text-gray-700'>Quantity :</p>
                            <div className='flex items-center space-x-4 mt-2'>
                                <button className='border rounded w-8 h-8 cursor-pointer flex items-center justify-center' onClick={() => handlequantity("minus")} >-</button>
                                <span>{quantity}</span>
                                <button className='border rounded cursor-pointer w-8 h-8 flex items-center justify-center' onClick={() => handlequantity("plus")}>+</button>
                            </div>
                        </div>
                        <button className={`bg-black text-white py-2 px-6 rounded w-full uppercase cursor-pointer ${isbuttonDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900"}`} onClick={handleaddtocart} disabled={isbuttonDisabled} >{isbuttonDisabled ? "Adding..." : "Add to Cart"} </button>
                        <div className='mt-10 text-gray-700'>
                            <h3 className='text-lg font-semibold'>Product Details</h3>
                            <table className='w-full text-sm text-left text-gray-600'>
                                <tbody>
                                    <tr>
                                        <td className='py-1'>Brand</td>
                                        <td className='py-1'>{selectedProduct.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>Category</td>
                                        <td className='py-1'>{selectedProduct.category}</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>Material</td>
                                        <td className='py-1'>{selectedProduct.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className='mt-20'>
                    <h2 className='text-2xl font-medium text-center mb-4'>Related Products</h2>
                    <Productsgrid products={similarProducts} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails