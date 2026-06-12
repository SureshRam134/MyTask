import React, { useEffect, useState } from 'react'
import { Add, Sub } from '../App';
import { studentData } from './Students';

const JsInterview = () => {

  // ques 1
  const frontend = ["HTML", "CSS", "JavaScript"];
  const backend = ["Node.js", "MongoDB"];
  const fullStack = [...frontend, ...backend]

  // ques 2
  const [mark, setMark] = useState([])

  const totalMarks = (...marks) => {
    setMark([...marks])
  }
  useEffect(() => {
    totalMarks(80, 90, 70, 60)
  }, [])
  const totalMark = mark.reduce((acc, itm) => (acc + Number(itm)), 0)


  //ques-3
  const [details, setDetails] = useState({
    name: "",
    role: '',
    company: ''
  })
  const [detailsStore, setDetailsStore] = useState([])

  const detailsInput = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value })
  }

  const DetailsSubmit = (e) => {
    e.preventDefault();
    setDetailsStore([...detailsStore, details])
    setDetails({
      name: "",
      role: '',
      company: ''
    })
  }

  //ques - 4
  const student = { name: "Arun", course: "MERN", city: "Chennai" }
  const { name, course, city } = student;

  //ques - 5
  const colors = ["Red", "Blue", "Green"];
  const [firstColor, secondColor, thirdColor] = colors

  //ques - 6
  const welcomeUser = (name = 'Guest') => {
    let user = `i am ${name}`
    return user
  }


  //ques - 7
  const employeeName = "Priya";
  const employeeRole = "React Developer";
  const employee = {
    employeeName,
    employeeRole
  }

  //ques - 8
  const userName = null;
  const Nullish = userName ?? "Guest User "




  // ques 10
  const markTotal = (...marks) => {
    let total = 0
    for (let i = 0; i < marks.length; i++) {
      total += marks[i]
    }
    return total
  }






  return (
    <div>
      <section>
        {/* question 1 - Template Literals Input */}
        <h1>question 1 Template Literals Input</h1>
        {
          fullStack.map((itm, inx) => (
            <p key={inx}>{itm}</p>
          ))
        }
      </section> <br />

      <section>
        {/* question 2 - Rest Parameter */}
        <h1> question 2 - Rest Parameter</h1>
        <h1>mark:</h1>
        {mark.map((itm, inx) => (
          <p key={inx}>{itm}</p>
        ))}
        <p>total mark : {totalMark}</p>
      </section> <br />


      <section>
        {/* question 3 - Template Literals Input */}
        <h1> question 3 - Template Literals Input</h1>
        <h1>Template Literals Input</h1>

        <form onSubmit={DetailsSubmit}>
          <input type="text" placeholder='Enter your name' value={details.name} name='name' onChange={detailsInput} />
          <input type="text" placeholder='Enter your role' value={details.role} name='role' onChange={detailsInput} />
          <input type="text" placeholder='Enter your company' value={details.company} name='company' onChange={detailsInput} />
          <button type='submit' > Submit</button>
        </form>


        {detailsStore.length > 0 ?
          detailsStore.map((itm, inx) => (
            <p key={inx}>{`i am ${itm.name}, my role ${itm.role} work in ${itm.company}`}</p>
          ))
          :
          <p>No data here</p>
        }
      </section> <br />

      <section>
        {/* question 4 - Object Destructuring */}
        <h1> question 4 - Object Destructuring</h1>
        <p>{`i am ${name}`}</p>
        <p>{`i currently study ${course}`}</p>
        <p>{`my from ${city}`}</p>
      </section> <br />

      <section>
        {/* question 5 - Array Destructuring Input */}
        <h1> question 5 - Array Destructuring Input</h1>
        <p>{`This is ${firstColor} color`}</p>
        <p>{`This is ${secondColor} color`}</p>
        <p>{`This is ${thirdColor} color`}</p>
      </section> <br />

      <section>
        {/* question 6 - Default Parameters  */}
        <h1> question 6 - Default Parameters </h1>
        <p>{welcomeUser()}</p>
      </section> <br />

      <section>
        {/* question 7 -  Task Create object using ES6 shorthand property.   */}
        <h1> question 7 -  Task Create object using ES6 shorthand property.  </h1>
        <p>{`i am ${employee.employeeName}, my role ${employee.employeeRole}`}</p>
      </section> <br />

      <section>
        {/* question 8 -   Nullish Coalescing Operator  */}
        <h1>question 8 -   Nullish Coalescing Operator </h1>
        <p> {` this value is null or undefined so showing Expected Output  ${Nullish}`}</p>
      </section> <br />

      <section>
        {/* question 9 -  Import / Export (Real Interview Task)  */}
        <h1>question 9 -  Import / Export (Real Interview Task) </h1>
        <p>Add =  <Add a={20} b={10} /></p>
        <p>Sub =  <Sub a={20} b={10} /></p>
      </section> <br />

      <section>
        {/* question 10 -  students.js Create and Export  && Use Rest Parameter. Return total marks. */}
        <h1>question 10 -  students.js Create and Export && Use Rest Parameter. Return total marks. </h1>

        1.students.js Create and Export
        {
          studentData.map((itm, inx) => (
            <div key={inx}>
              <p>{itm?.name}</p>
              <div>{itm?.skills.map((item, index) => (
                <p key={index}>{item}</p>
              ))}</div>
              <p>{itm?.company?.name}</p>
            </div>
          ))
        }

        {/* Use Rest Parameter. Return total marks. */}
        2. Use Rest Parameter. Return total marks.

        <p>{markTotal(80, 56, 84, 23, 18)}</p>

      </section>


    </div>


  )
}

export default JsInterview