import React from 'react'
import { useState } from 'react';

const EmployeeAttendanceTracker = () => {

    const [search, setSearch] = useState("");
    const employees = [
        {
            id: 1,
            name: "Suresh",
            checkIn: "09:00 AM",
            checkOut: "06:00 PM",
            status: "Present",
        },
        {
            id: 2,
            name: "Raju",
            checkIn: "-",
            checkOut: "-",
            status: "Absent",
        },
        {
            id: 3,
            name: "Prakash",
            checkIn: "09:15 AM",
            checkOut: "06:10 PM",
            status: "Present",
        },
        {
            id: 4,
            name: "Kumar",
            checkIn: "-",
            checkOut: "-",
            status: "Absent",
        },
    ];

    const presentEmployees = employees.filter(
        (employee) => employee.status === "Present"
    );

    const absentEmployees = employees.filter(
        (employee) => employee.status === "Absent"
    );

    const searchedEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Employee Attendance Tracker</h1>

            <input
                type="text"
                placeholder="Search Employee..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <br />
            <br />


            <table
                width="100%"
            >
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Check In Time</th>
                        <th>Check Out Time</th>
                        <th>Attendance Status</th>
                    </tr>
                </thead>

                <tbody>
                    {searchedEmployees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.checkIn}</td>
                            <td>{employee.checkOut}</td>
                            <td>{employee.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                    <br />
            <h2>Present Employees : {presentEmployees.length}</h2>
            <ul>
                {presentEmployees.map((employee) => (
                    <li key={employee.id}>{employee.name}</li>
                ))}
            </ul>

            <h2>Absent Employees : {absentEmployees.length}</h2>
            <ul>
                {absentEmployees.map((employee) => (
                    <li key={employee.id}>{employee.name}</li>
                ))}
            </ul>
        </div>


    )
}

export default EmployeeAttendanceTracker