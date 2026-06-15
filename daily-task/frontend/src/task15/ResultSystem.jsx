import React from 'react'
import { useState } from 'react'

const ResultSystem = () => {

  const [studentData, setStudentData] = useState([
    {
      name: 'sarathi',
      mark: [78, 88, 67]
    },
    {
      name: 'raju',
      mark: [90, 88, 97]
    },
    {
      name: 'prakash',
      mark: [89, 29, 97]
    },
    {
      name: 'vignesh',
      mark: [45, 52, 53]
    },
  ])

  const totalMark = (stu) => {
    return  stu.mark.reduce((acc, num) => (acc + Number(num)), 0)
  }

  const Average = (stu) => {
    return (totalMark(stu) / stu.mark.length).toFixed(0) 
  }

  const Status = (stu) => {
    return totalMark(stu) <= 150 ? "fail" : "pass"
  }

  const Outstanding = (stu) => {
    return totalMark(stu) > 250 ? "Topper" : totalMark(stu) > 150 ? "Avg" : "low"
  }

  return (
    <div>
      <h1>Online Exam Result System</h1>
      <input type="text" name="" id="" placeholder='Search student id' />
      <table>
        <thead>
          <tr>
            <th>N.No</th>
            <th>name</th>
            <th>Tamil</th>
            <th>English</th>
            <th>social</th>
            <th>TotalMark</th>
            <th>Avg</th>
            <th>Status</th>
            <th>Outstanding</th>
          </tr>
        </thead>
        <tbody >
          {
            studentData.length > 0 ?
              studentData.map((stu, inx) => (
                <tr>
                  <td>{inx + 1}</td>
                  <td>{stu.name}</td>
                  {
                    stu.mark.map((mrk, index) => (
                      <td>{mrk}</td>))
                  }
                  <td>{totalMark(stu)}</td>
                  <td>{Average(stu)}%</td>
                  <td>{Status(stu)}</td>
                  <td>{Outstanding(stu)}</td>
                </tr>
              )) :
              <tr>
                <td>No data here</td>
              </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default ResultSystem