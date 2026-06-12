

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectRoute from './ProtectRoute'
import Home3 from '../task11/Home3'
import Home12 from '../task12/Home12'
 



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
      </Routes>
    </div>
  )
}

export default AllRoute
