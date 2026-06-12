import React, { useState } from 'react'

const SalaryFilter = () => {

    const [employee, setEmployee] = useState([
        { id: 1, name: "John", salary: 25000 },
        { id: 2, name: "David", salary: 45000 },
        { id: 3, name: "Sam", salary: 60000 },
        { id: 4, name: "Peter", salary: 30000 }
    ])
    return (
        <div>
            <h1> Ques-1 : Filter the employee salary greater than 40,000. </h1>
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
                        employee.filter((item, index) => item.salary > 40000).map((itm, inx) => (
                            <tr key={inx}>
                                <td>{inx + 1}</td>
                                <td>{itm.name}</td>
                                <td>{itm.salary}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SalaryFilter