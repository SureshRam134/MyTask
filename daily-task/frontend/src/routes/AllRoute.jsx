

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectRoute from './ProtectRoute'
import Home3 from '../task3/Home3'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/task3' element={<ProtectRoute.Task3 />} >
          <Route index element={<Home3 />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AllRoute