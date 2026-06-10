import { useState } from 'react'
import { Link } from 'react-router-dom'

const Employee = () => {
    const initional = {
        name: '',
        salary: '',
        department: '',
    }

    const [data, setData] = useState(initional)
    const [err, setErr] = useState(initional)
    const [store, setStore] = useState([])
    const [toggle, setToggele] = useState(false)

    const openToggel = () => {
        setToggele(true)
    }

    const inputFunction = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        setErr({ ...err, [name]: '' })
    }

    const submitFunction = () => {
        const { name, salary, department, address } = data;
        const newErr = {}
        if (!name) newErr.name = "Please enter name"
        if (!salary) newErr.salary = "Please enter salary"
        if (!department) newErr.department = "Please enter department "
        if (Object.keys(newErr).length > 0) {
            setErr(newErr)
            return;
        }
        setStore([...store, data])
        setData(initional)
        setToggele(false)

    }

    const closeToggel = () => {
        setToggele(false)
        setData(initional)
        setErr(initional)
    }

    return (
        <div className='min-h-screen relative bg-gray-100  '>
            <div className='flex justify-between py-4 px-10 mb-5 bg-gray-200 '>
                <div className='flex gap-3 items-center'>
                    <Link to='/' className='text-2xl'>🔙</Link>
                    <h1 className='font-medium text-3xl ' >Employee Details</h1>
                </div>
                <button className='text-white py-2 bg-blue-500  px-5  rounded-md text-lg hover:bg-blue-400 cursor-pointer' onClick={openToggel} >Add Employee</button>
            </div>
            {toggle ?
                <div className='bg-gray-300 w-[350px] h-auto px-5 py-10 rounded-md mx-auto'>
                    <h3 className='pb-7 text-center text-2xl text-blue-800 '> Employee Input Form</h3>
                    <div className='relative mb-8 flex'>
                        <input
                            className='bg-gray-200 px-4 py-3 rounded-md font-medium text-base w-full outline-none'
                            value={data.name}
                            name='name'
                            placeholder='Enter Employee Name'
                            onChange={inputFunction}
                        />
                        {err.name && <span className='absolute -bottom-5 text-red-600 font-medium text-sm '>{err.name}</span>}
                    </div>
                    <div className='relative mb-8 flex'>
                        <input
                            className='bg-gray-200 px-4 py-3 rounded-md font-medium text-base w-full outline-none'
                            value={data.salary}
                            name='salary'
                            placeholder='Enter Employee Salary'
                            onChange={inputFunction}
                        />
                        {err.salary && <span className='absolute -bottom-5 text-red-600 font-medium text-sm '>{err.salary}</span>}
                    </div>
                    <div className='relative mb-8 flex'>
                        <input
                            className='bg-gray-200 px-4 py-3 rounded-md font-medium text-base w-full outline-none '
                            value={data.department}
                            name='department'
                            placeholder='Enter Employee Department'
                            onChange={inputFunction}
                        />
                        {err.department && <span className='absolute -bottom-5 text-red-600 font-medium text-sm '>{err.department}</span>}
                    </div>

                    <button className='text-white py-3 bg-blue-500  w-full rounded-md text-lg hover:bg-blue-400 cursor-pointer' onClick={submitFunction}>Submit</button>
                    <button className='text-white py-3 mt-4 bg-red-500  w-full rounded-md text-lg hover:bg-red-400 cursor-pointer' onClick={closeToggel}>Cancel</button>
                </div> :
                <div className='w-[80%] mx-auto py-0' >
                    <h3 className="text-sm py-5 text-blue-600 font-bold">Total Employee: {store.length ? store.length : "No Data"}</h3>
                    <div className='h-[500px] overflow-y-scroll bg-gray-200 relative hidden-scroll'>
                        <table className=' w-full bg-gray-200' >
                            <thead className='sticky top-0 z-50 bg-gray-700 text-white rounded-t-2xl'>
                                <tr className='text-center'>
                                    <th className='py-4'>N.No</th>
                                    <th className='py-4'>Name</th>
                                    <th className='py-4'>Salary</th>
                                    <th className='py-4'>Department</th>
                                    <th className='py-4'>Action</th>
                                </tr>
                            </thead>
                            <tbody className=' relative'>
                                {
                                    store.length > 0 ?
                                        store.map((itm, inx) => (
                                            <tr className='text-center py-5 hover:bg-gray-300 cursor-pointer' key={inx}>
                                                <td className='py-4'>{inx + 1}</td>
                                                <td className='py-4'>{itm.name}</td>
                                                <td className='py-4'>{itm.salary}</td>
                                                <td className='py-4'>{itm.department}</td>
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
                                                        <button className='px-6 py-4 bg-gray-300 rounded-2xl text-2xl text-blue-700 cursor-pointer' onClick={openToggel}>+</button>
                                                    </div>
                                                    <p className=' text-white font-bold text-center text-2xl'>No data </p>
                                                </div>
                                            </td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>

                </div>}
        </div>
    )
}

export default Employee