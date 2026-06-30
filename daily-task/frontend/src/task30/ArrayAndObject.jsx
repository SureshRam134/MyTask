import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ArrayAndObject = () => {


    // task -1
    const initial1 = [
        "Apple",
        "Orange",
        "Mango"]

    const [fruits, setFruits] = useState("")
    const [add, setAdd] = useState([])
    // or const [add, setAdd] = useState(initial)  if u use this, doesn't use useEffect

    useEffect(() => { setAdd(...add, initial1) }, [])

    const addFruits = () => {
        setAdd((pre) => [...pre, fruits])
        setFruits("")
    }


    // task -2 
    const initial2 = {
        name: "Ravi",
        course: "MERN",
        city: "Chennai"
    }

    const [student, setStudent] = useState(initial2)

    const updateStudent = () => {
        setStudent((pre) => ({ ...pre, city: "rkpet" }))
    }

    // task-3
    const Initial3 = [
        {
            id: 1,
            name: "Ravi",
            salary: 25000
        },
        {
            id: 2,
            name: "Priya",
            salary: 30000
        },
        {
            id: 3,
            name: "Arun",
            salary: 35000
        }
    ]
    const [employees, setEmployees] = useState(Initial3)

    const employeeUpdate = () => {
        setEmployees(employees.map((pre, inx) => pre.id === 2 ? {...pre, salary : "50000"} : pre))
    }


    return (
        <div>
            <h1 className='font-bold text-2xl text-blue-700'>day:30</h1> <br />
            <section>
                <h1 className='font-bold text-2xl '>Task 1</h1>
                <h5 className='font-semibold text-xl px-5'>fruit List:</h5>
                <div className='flex gap-5 px-5'>
                    <input type="text" name="" id="" placeholder='Add-Fruits...' className='border w-[50]' onChange={(e) => { setFruits(e.target.value) }} value={fruits} />
                    <button className='border' onClick={addFruits}>Add-Fruits</button>
                </div>
                {
                    add.map((item, inx) => (
                        <p className='px-10' key={inx}>{item}</p>
                    ))
                }
            </section>
            <br />

            <section>
                <h1 className='font-bold text-2xl '>Task 2</h1>
                <h5 className='font-semibold text-xl px-5'>student data:</h5>
                <div className='flex gap-5 px-5'>
                    <p className='font-semibold'>Click and update the city :</p>
                    <button className='border' onClick={updateStudent}>Add-Fruits</button>
                </div>
                <div className=' px-10'>
                    <p>{student.name}</p>
                    <p>{student.course}</p>
                    <p>{student.city}</p>
                </div>
            </section>
            <br />

            <section>
                <h1 className='font-bold text-2xl '>Task 3</h1>
                <h5 className='font-semibold text-xl px-5'>employees data:</h5>
                <div className='flex gap-5 px-5'>
                    <p className='font-semibold'>Click and update the salary from ID: 2 -</p>
                    <button className='border' onClick={employeeUpdate}>Update </button>
                </div>
                <div className=' px-10'>
                    {
                        employees.map((item, inx) => (
                            <div>
                                <p>{item.id}</p>
                                <p>{item.name}</p>
                                <p>{item.salary}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default ArrayAndObject