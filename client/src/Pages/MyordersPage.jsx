import React, { useEffect, useState } from 'react'

const MyordersPage = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        // Fetch orders from API or context
        setTimeout(() => {
            const mockorder = [
                {
                    _id: "284",
                    createdAt: new Date(),
                    shippingAddress: { city: "Lahore", country: "Pakistan" },
                    orderItems: [
                        { name: "Product 1", image: "https://picsum.dev/200?random=2" },
                    ],
                    totalPrice: 200,
                    isPaid: true

                },
                {
                    _id: "2847",
                    createdAt: new Date(),
                    shippingAddress: { city: "Lahore", country: "Pakistan" },
                    orderItems: [
                        { name: "Product 2", image: "https://picsum.dev/200?random=4" },
                    ],
                    totalPrice: 200,
                    isPaid: true

                }
            ]
            setOrders(mockorder);

        }, 1000);
    }, []);
    return (
        <div className='max-w-7xl mx-auto p-4 sm:p-6'>
            <h1 className='text-2xl font-bold mb-6'>My Orders</h1>
            <div className='relative shadow-md sm:rounded-lg overflow-hidden'>
                <table className='min-w-full text-left text-gray-500'>
                    <thead className='bg-gray-100 uppercase text-xs text-gray-700'>
                        <tr>
                            <th className='px-4 py-2 sm:py-3'>Image</th>
                            <th className='px-4 py-2 sm:py-3'>Order ID</th>
                            <th className='px-4 py-2 sm:py-3'>Created</th>
                            <th className='px-4 py-2 sm:py-3'>Shipping Address</th>
                            <th className='px-4 py-2 sm:py-3'>Items</th>
                            <th className='px-4 py-2 sm:py-3'>Price</th>
                            <th className='px-4 py-2 sm:py-3'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-xs text-gray-900'>
                        {orders.length > 0 ? orders.map((order) => (
                            <tr key={order._id} className='border-b hover:bg-gray-50 cursor-pointer'>
                                <td className='px-4 py-2 sm:py-3'>
                                    <img src={order.orderItems[0].image} alt={order.orderItems[0].name} className='w-10 h-10 sm:w-12 sm:h-12 object-cover rounded' />
                                </td>
                                <td className='px-4 py-2 sm:py-3 whitespace-nowrap font-medium'>#{order._id}</td>
                                <td className='px-4 py-2 sm:py-3'>{new Date(order.createdAt).toLocaleDateString()} {" "} {new Date(order.createdAt).toLocaleTimeString()}</td>
                                <td className='px-4 py-2 sm:py-3'>{order.shippingAddress ? `${order.shippingAddress.city}, ${order.shippingAddress.country}` : 'N/A' }</td>
                                <td className='px-4 py-2 sm:py-3'>
                                   {order.orderItems.length}
                                </td>
                                <td className='px-4 py-2 sm:py-3'>${order.totalPrice.toFixed(2)}</td>
                                <td className='px-4 py-2 sm:py-3'>
                                    <span className={`px-2 py-1 rounded-full text-xs ${order.isPaid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {order.isPaid ? 'Paid' : 'Pending'}
                                    </span>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="7" className='px-4 py-2 sm:py-3 text-center'>No orders found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyordersPage