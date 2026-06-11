import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='h-screen bg-gray-100 relative'>
            <h1 className='text-3xl text-center p-10 text-blue-900 font-bold'>Today Task - 10/06/2026</h1>
            <div className='flex flex-col gap-4 bg-gray-300 w-[400px] mx-auto px-5 py-10 rounded-md'>
                <div className='flex gap-2 items-center'>
                    <p className='text-base text-gray-800 font-bold'>Employee add and list - </p>
                    <Link to='/task1/' className='px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-500'>Task One</Link>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='text-base text-gray-800 font-bold'>Product search system - </p>
                    <Link to='/task2/' className='px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-500'>Task Two</Link>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='text-base text-gray-800 font-bold'>User Data Fetch and list - </p>
                    <Link to='/task3/' className='px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-500'>Task Three</Link>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='text-base text-gray-800 font-bold'>Dark Mode Toggle - </p>
                    <Link to='/task4/' className='px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-500'>Task Four</Link>
                </div>
                
            </div>
        </div>
    )
}

export default Home