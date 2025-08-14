import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import PaypalButton from './PaypalButton'
const cart = {
    products: [
        {
            name: "Stylish Hoodie",
            size: "M",
            color: "Red",
            price: 120,
            image: "https://picsum.dev/200?random=2"
        },
        {
            name: "Stylish jacket",
            size: "L",
            color: "Blue",
            price: 145,
            image: "https://picsum.dev/200?random=3"
        },
    ],
    totalPrice: 265,
}
const Checkout = () => {
    const navigate = useNavigate()
    const [checkoutId, setCheckoutId] = useState(null)
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone:""
    })
    const handleCreatecheckout = (e) => {
        e.preventDefault()
        setCheckoutId(1839)
    }
    const handlePaymentSuccess = (details) => {
        console.log("Payment Successful:", details)
        navigate('/order-confirmation')
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 max-w-7xl tracking-tighter m-auto gap-8 px-6 py-10'>
            {/* left section  */}

        <div className='bg-white rounded-lg p-6'>
            <h2 className='text-2xl mb-6 uppercase'>Checkout</h2>
            <form onSubmit={handleCreatecheckout} >
                <h3 className='text-lg mb-4'>Contact Details</h3>
                <div className='mb-4'>
                    <label className='block text-gray-700' >Email</label>
                    <input type="email" value={"dummy@gmail.com"} className='w-full border rounded p-1' disabled  />
                </div>
                <div className='text-lg text-gray-700 mb-4'>Delivery</div>
                <div className='grid grid-cols-2 gap-4 mb-4'>
                    <div>
                        <label className='block text-gray-700 capitalize'>Firstname</label>
                        <input type="text" className='w-full border p-1 rounded' required value={shippingAddress.firstName} onChange={(e)=>setShippingAddress({...shippingAddress, firstName: e.target.value})} />
                    </div>
                    <div>
                        <label className='block text-gray-700 capitalize'>Lastname</label>
                        <input type="text" className='w-full border p-1 rounded' required value={shippingAddress.lastName} onChange={(e)=>setShippingAddress({...shippingAddress, lastName: e.target.value})} />
                    </div>
                    <div>
                        <label className='block text-gray-700 capitalize'>Address</label>
                        <input type="text" className='w-full border p-1 rounded' required value={shippingAddress.address} onChange={(e)=>setShippingAddress({...shippingAddress, address: e.target.value})} />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 mb-4'>
                    <div>
                        <label className='block text-gray-700 capitalize'>City</label>
                        <input type="text" className='w-full border p-1 rounded' required value={shippingAddress.city} onChange={(e)=>setShippingAddress({...shippingAddress, city: e.target.value})} />
                    </div>
                    <div>
                        <label className='block text-gray-700 capitalize'>Postal Code</label>
                        <input type="text" className='w-full border p-1 rounded' required value={shippingAddress.postalCode} onChange={(e)=>setShippingAddress({...shippingAddress, postalCode: e.target.value})} />
                    </div>
                    <div>
                        <label className='block text-gray-700 capitalize'>Country</label>
                        <input type="text" className='w-full border p-1 rounded' required value={shippingAddress.country} onChange={(e)=>setShippingAddress({...shippingAddress, country: e.target.value})} />
                    </div>
                    <div>
                        <label className='block text-gray-700 capitalize'>Phone Number</label>
                        <input type="text" className='w-full border p-1 rounded' required value={shippingAddress.phone} onChange={(e)=>setShippingAddress({...shippingAddress, phone: e.target.value})} />
                    </div>
                </div>
                <div className='mt-6'>
                    {!checkoutId ?( <button  type='submit' className='w-full rounded text-white bg-black py-3' >Continue To Checkout</button> ):(<div>
                        <h3 className='text-lg mb-4'>Pay With Paypal</h3>
                        <PaypalButton  amount={100} onSuccess={handlePaymentSuccess} onError={(err)=>alert("Error While Payment Try Again")}  />
                    </div>) }
                </div>
            </form>
        </div>

        </div>
    )
}

export default Checkout