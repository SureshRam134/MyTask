import React, { useMemo } from 'react'
import { useState } from 'react'

const StudentManagement = () => {

    const [find, setFind] = useState('')
    const [students, setStudents] = useState([
        { id: 1, name: "Arun", mark: 85 },
        { id: 2, name: "Karthik", mark: 45 },
        { id: 3, name: "Vijay", mark: 92 },
        { id: 4, name: "Ajay", mark: 35 }
    ])

    const studentFind = useMemo(() => {
        if (!find) return students
        const findData = students.find((item, inx) => item.id === Number(find))
        return findData ? [findData] : []
    }, [students, find])

    const filterStudent = useMemo(() => {
        return studentFind.filter((item, index) => (item.mark >= 50))
    }, [studentFind])

    const TodalValue = useMemo(() => {
        return studentFind.reduce((acc, item) => (acc + item.mark), 0)
    }, [filterStudent])

    return (
        <div>
            <h1> Ques-5 :  Student Management System (map + filter + find + reduce). </h1>
            <div className='flex'>
                <p>Student Find : </p>
                <input type="text" name="find" id="" className='border  mx-2  px-2 ' placeholder='Student Find' onChange={(e) => { setFind(e.target.value) }} />
            </div>

            <table>
                <thead>
                    <tr>
                        <td>N.No</td>
                        <td>Name</td>
                        <td>Salary</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentFind.length === 0 ?
                            <tr>
                                <td>No Student Found</td>
                            </tr> :

                            filterStudent.length > 0 ?
                                filterStudent.map((itm, inx) => (
                                    <tr key={inx}>
                                        <td>{itm.id}</td>
                                        <td>{itm.name}</td>
                                        <td>{itm.mark}</td>
                                    </tr>
                                ))
                                :
                                <tr>
                                    <td>This Student Fail, i connt show</td>
                                </tr>
                    }
                    {filterStudent.length !== 0 && <tr>
                        <td> </td>
                        <td>pass Student Total : </td>
                        <td>{TodalValue}</td>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
}

export default StudentManagement