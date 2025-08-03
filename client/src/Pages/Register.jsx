import React, { useState } from 'react'
import { Link } from 'react-router';
import registerimage from "../assets/register.webp"; // Assuming you have a login image in your assets

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log("Registering:", { name, email, password });
    }

    return (<div className='flex'>
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
            <form onSubmit={handleSubmit} className='w-full max-w-md bg-white p-8 rounded-lg shadow-sm'>
                <div className='mb-6 flex justify-center'>
                    <h2 className='text-xl font-medium'>Logo</h2>
                </div>
                <h2 className='text-2xl font-bold text-center mb-6'>Hey There 👋</h2>
                <p className='text-center mb-6 capitalize'>Please enter your credentials to create account.</p>
                <div className='mb-4'>
                    <label className='font-semibold block text-sm mb-2'>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-full p-2 border rounded'
                        placeholder='Enter Your Name' />
                </div>
                <div className='mb-4'>
                    <label  className='font-semibold block text-sm mb-2'>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-2 border rounded'
                        placeholder='Enter Your Email Address' />
                </div>
                <div className='mb-4'>
                    <label  className='font-semibold block text-sm mb-2'>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full p-2 border rounded'
                        placeholder='Enter Your Password' />
                </div>
                <button className='w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition'>Sign In</button>
                <p className='text-sm mt-6 text-center'>Already Have An Account?  <Link to="/login" className='text-blue-500'>Sign In</Link></p>
            </form>
        </div>
        <div className='hidden md:block bg-gray-800 w-1/2'>
            <div className='h-full flex justify-center items-center'>
                <img src={registerimage} alt="Register" className='h-[700px] w-full object-cover' />
            </div>
        </div>
    </div>
    )
}

export default Register