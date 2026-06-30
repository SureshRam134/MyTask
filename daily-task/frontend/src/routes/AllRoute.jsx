

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectRoute from './ProtectRoute'
import Home3 from '../task11/Home3'
import Home12 from '../task12/Home12'
import ResultSystem from '../task15/ResultSystem'
import EmployeeAttendanceTracker from '../task15/EmployeeAttendanceTracker'
import MovieTicketBooking from '../task15/MovieTicketBooking'
import ArrayAndObject from '../task30/ArrayAndObject'
 



const AllRoute = () => {

  return (
    <div>
      <Routes>
        <Route path='/task11' element={<ProtectRoute.Task11 />} >
          <Route index element={<Home3 />} />
        </Route>
        <Route path='/task12' element={<ProtectRoute.Task12 />} >
          <Route index element={<Home12 />} />
        </Route>
        <Route path='/task15' element={<ProtectRoute.Task12 />} >
          <Route index element={<ResultSystem />} />
          <Route path='attendance-tracker' element={<EmployeeAttendanceTracker />} />
          <Route path='movie-ticket-booking' element={<MovieTicketBooking />} />
        </Route>
        <Route path='/task30' element={<ProtectRoute.Task12 />} >
          <Route index element={<ArrayAndObject />} />
        </Route>


      </Routes>
    </div>
  )
}

export default AllRoute
