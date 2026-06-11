import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectRoutes from '../components/ProtectRoutes'
import Employee from '../pages/Employee'
import Home from '../pages/Home'
import Product from '../pages/Product'
import User from '../pages/User'
import ApplyDarkMode from '../pages/ApplyDarkMode'
import PreviousSearch from '../pages/PreviousSearch'

const TaskRoute = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/task1' element={<ProtectRoutes.TaskOne />}>
                    <Route index element={<Employee />} />
                </Route>
                <Route path='/task2' element={<ProtectRoutes.TaskTwo />}>
                    <Route index element={<Product />} />
                </Route>
                <Route path='/task3' element={<ProtectRoutes.TaskThree />}>
                    <Route index element={<User />} />
                </Route>
                <Route path='/task4' element={<ProtectRoutes.TaskFour />}>
                    <Route index element={<ApplyDarkMode />} />
                </Route>
                <Route path='/task5' element={<ProtectRoutes.TaskFive />}>
                    <Route index element={<PreviousSearch />} />
                </Route>
            </Routes>
        </>
    )
}

export default TaskRoute