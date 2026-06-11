import React, { useContext } from 'react'
import Darkmode from '../components/Darkmode'
import { Link } from 'react-router-dom'
import { ContextCreate } from '../context/ProvideContext'

const ApplyDarkMode = () => {
    const { darkModeFunction, darks } = useContext(ContextCreate)
    return (
        <>
            <Darkmode>
                <div className='h-screen '>
                    <div className='flex justify-between py-3 px-10 mb-5 bg-gray-200 '>
                        <div className='flex gap-3 items-center'>
                            <Link to='/' className='text-2xl'>🔙</Link>
                            <h1 className='font-medium text-3xl ' >Product</h1>
                        </div>
                        <button className='text-base py-2 px-4 bg-blue-800 text-white rounded-md' onClick={() => { darkModeFunction() }}>{darks ? "Dark Mode" : "Light Mode"}</button>
                    </div>

                    <div className=''>
                        <h1 className='text-3xl text-center mt-30 font-black '>{darks ? "Dark Mode " : "Light Mode"}</h1>
                    </div>
                </div>
            </Darkmode>
        </>
    )
}

export default ApplyDarkMode