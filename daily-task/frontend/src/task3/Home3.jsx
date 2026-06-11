import React from 'react'
import SalaryFilter from '../task3/SalaryFilter'
import UserFind from './UserFind'
import ProductCard from './ProductCard'
import CartTotal from './CartTotal'
import StudentManagement from './StudentManagement'
import BonusCompany from './BonusCompany'

const Home3 = () => {
  return (
    <div>
      {/* ques -1  */}
      <SalaryFilter />
      <br />
      {/* ques-2 */}
      <UserFind />
      <br />
      {/* ques-3 */}
      <ProductCard />
      <br />
      {/* ques-4 */}
      <CartTotal />
      <br />
      {/* ques-5 */}
      <StudentManagement />
      <br />
      {/* ques-6 */}
      <BonusCompany />
    </div>
  )
}

export default Home3