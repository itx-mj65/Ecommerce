import React from 'react'
import Hero from '../Components/Layout/Hero'
import GenderCollectionSection from '../Components/Products/GenderCollectionSection'
import NewArrivals from '../Components/Products/NewArrivals'
import ProductDetails from '../Components/Products/ProductDetails'
import Productsgrid from '../Components/Products/Productsgrid'
import FeaturedCollection from '../Components/Products/FeaturedCollection'
import FeatureSection from '../Components/Products/FeatureSection'
const sampleProducts = [
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
    {
        _id: 5,
        name: "Stylish Jacket",
        price: 120,
        images: [{
            url: "https://picsum.dev/200?random=5",
            Alttext: "Stylish Jacket"
        }]
    },
    {
        _id: 6,
        name: "Stylish Jacket",
        price: 120,
        images: [{
            url: "https://picsum.dev/200?random=6",
            Alttext: "Stylish Jacket"
        }]
    },
    {
        _id: 7,
        name: "Stylish Jacket",
        price: 120,
        images: [{
            url: "https://picsum.dev/200?random=7",
            Alttext: "Stylish Jacket"
        }]
    },
    {
        _id: 8,
        name: "Stylish Jacket",
        price: 120,
        images: [{
            url: "https://picsum.dev/200?random=8",
            Alttext: "Stylish Jacket"
        }]
    },
]

const Home = () => {
    return (
        <div>
            <Hero />
            <GenderCollectionSection />
            <NewArrivals />

            {/* best seller  */}

            <h2 className='text-3xl font-bold text-center mb-4'>Best Seller</h2>
            <ProductDetails />

            <div className='container mx-auto'>
                <h2 className='text-3xl text-center font-bold mb-4'>Top Wears For Womens</h2>
                <Productsgrid products={sampleProducts} />
            </div>

            <FeaturedCollection />

            <FeatureSection />

        </div>
    )
}

export default Home