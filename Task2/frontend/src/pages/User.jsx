import React, { useEffect, useMemo, useState } from 'react'
import { FourSquare } from 'react-loading-indicators'
import { Link } from 'react-router-dom'

const User = () => {

    const fetchUser = async () => {
        setLoading(true)
        try {

            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const userData = await res.json()
            setData(userData)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    const filterUser = useMemo(() => {
        return data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    }, [data, search])

    if (loading)
        return (
            <div className='h-screen bg-gray-300 flex justify-center items-center'>
                <FourSquare color="#32cd32" size="medium" text="Loading...!" textColor="" />
            </div>
        )

    return (
        <div className='min-h-screen relative bg-gray-100  '>
            <div className='flex justify-between py-3 px-10 mb-5 bg-gray-200 '>
                <div className='flex gap-3 items-center'>
                    <Link to='/' className='text-2xl'>🔙</Link>
                    <h1 className='font-medium text-3xl ' >User</h1>
                </div>
                <input type="text"
                    placeholder='Search User'
                    className='py-3 bg-gray-400 w-[400px] font-medium rounded-md outline-none  px-4 placeholder::bg-gray-50 text-white' onChange={(e) => { setSearch(e.target.value) }} />
            </div>

            <div className='w-[80%] mx-auto py-0' >
                <h3 className="text-sm py-5 text-blue-600 font-bold">Total User: {data.length ? data.length : "No Data"}</h3>
                <div className='h-[500px] overflow-y-scroll bg-gray-200 relative hidden-scroll'>
                    <table className=' w-full bg-gray-200' >
                        <thead className='sticky top-0 z-50 bg-gray-700 text-white rounded-t-2xl'>
                            <tr className='text-center'>
                                <th className='py-4'>N.No</th>
                                <th className='py-4'>Name</th>
                                <th className='py-4'>Email</th>
                                <th className='py-4'>Company Name</th>
                                <th className='py-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody className=' relative'>
                            {
                                filterUser.length > 0 ?
                                    filterUser.map((itm, inx) => (
                                        <tr className='text-center py-5 hover:bg-gray-300 cursor-pointer' key={inx}>
                                            <td className='py-4'>{inx + 1}</td>
                                            <td className='py-4'>{itm.name}</td>
                                            <td className='py-4'>{itm.email}</td>
                                            <td className='py-4'>{itm.company.name}</td>
                                            <td className='py-4' >
                                                <button className='py-1 px-4 mr-2 rounded-md bg-green-700 cursor-pointer text-white hover:bg-green-500'>Edit</button>
                                                <button className='py-1 px-4 mr-2 rounded-md bg-red-700 cursor-pointer text-white hover:bg-red-500'>Delete</button>
                                            </td>
                                        </tr>

                                    ))
                                    :
                                    <tr>
                                        <td>
                                            <div className='bg-gray-500 mt-15 py-10 rounded-xl absolute w-full'>
                                                <div className='flex justify-center items-center mb-3'>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                                        className="text-gray-400 mx-auto"
                                                    >
                                                        <circle cx="11" cy="11" r="8"></circle>
                                                        <path d="m21 21-4.3-4.3"></path>
                                                        <path d="M8 11h6"></path>
                                                    </svg>
                                                </div>
                                                <p className=' text-white font-bold text-center text-2xl'>No User Found </p>
                                            </div>
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default User