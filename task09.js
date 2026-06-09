
//reverce a string without using inbuild
let name = 'suresh';
const reversed = (str) => {

    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed
}

console.log(reversed(name));

//Find the largest number in an array

const largestNumber = (arr) => {
    let largeNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largeNumber) {
            largeNumber = arr[i];
        }
    }
    return largeNumber
}

console.log(largestNumber([23, 65, 10, 29, 19, 89, 9]));


//Check Whether a Number is Even or Odd
let number = 4
let tableNum = 2
const checkNumber = (num1, num2) => {
    return num1 % num2 === 0 ? "Even" : "Odd"
}

console.log(checkNumber(number, tableNum));

const checkNumber2 = (arr, tNum) => {
    let ans = []
    let i = 0
    for (let num of arr) {
        ans[i] = num % tableNum === 0 ? "Even" : "Odd"
        i++
    }
    return ans
}
console.log(checkNumber2([3, 6, 18, 17, 20], 2));

const checkNumber3 = (arr, tNum) => {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        ans[i] = arr[i] % tableNum === 0 ? "Even" : "Odd"
    }
    return ans
}

console.log(checkNumber3([3, 7, 18, 6, 20], 3));

//count vowels in a string

const vowels = (str) => {
    vowelsStr = "aeiouAEIOU"
    let count = 0
    for (let char of str) {
        if (vowelsStr.includes(char)) count++
    }
    return count
}
console.log(vowels('suresh'));

const vowels2 = (str) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" ||
            str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" ||
            str[i] === "O" || str[i] === "U"
        ) { count++ }
    }
    return count
}
console.log(vowels2("REact nOde"));

//remove dupicate values

const dupicate = (val) => {
    let filterVal = []
    let i = 0;
    for (let num of val) {
        if (!filterVal.includes(num)) {

            filterVal[i] = num
            i++
            //or 
            // filterVal.push(num)
        }
    }
    return filterVal
}
console.log(dupicate([5, 8, 5, 7, 2, 1, 2, 9, 6]));

const dupicate2 = (val) => {
    let filterVal = []
    let k = 0;

    for (let i = 0; i < val.length; i++) {
        let stop = false;

        for (let j = 0; j < filterVal.length; j++) {
            if (val[i] === filterVal[j]) {
                stop = true
                break
            }
        }

        if (!stop) {
            filterVal[k] = val[i]
            k++
        }
    }
    return filterVal
}

console.log(dupicate2([5, 8, 5, 7, 2, 1, 2, 9, 6]));

//check if a string is a palindrome
const palindrome = (str) => {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed === str
}

console.log(palindrome('madam'));

//sum of all Array element
const sumFun = (arr) => {
    let sum = 0
    for (let n of arr) {
        sum += n
    }
    return sum
}

console.log(sumFun([3, 7, 3, 8, 6, 1]));

//convert First letter of Each word to UpperCase
const upperCase = (str) => {
    let words = str.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)

    }
    return words.join(' ')
}
console.log(upperCase('i am suresh'));

//find the factorial of a number
const factorial = (num) => {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result *= i
    }
    return result
}

console.log(factorial(4));




// Question 1 
const loginbBtn = document.getElementById("logBtn")

loginbBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const error = {}
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const errEmail = document.getElementById('err-email')
    const errPassword = document.getElementById('err-password')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) error.email = "please Enter Email"
    else if (!emailRegex.test(email)) error.email = "please enter vaild email"
    if (!password) error.password = "please enater password"
    else if (password.length < 6) error.password = "Must have 6 char"

    if (Object.keys(error).length > 0) {
        errEmail.innerHTML = error.email || ""
        errPassword.innerHTML = error.password || ""
        return
    }

    console.log("SuccessFully Login");
    alert("SuccessFully Login");
    errEmail.innerHTML = "";
    errPassword.innerHTML = "";
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""

})


// Question 2
const productBtn = document.getElementById("resultBtn")

productBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const productName = document.getElementById("product-name").value
    const productPrice = document.getElementById("product-price").value
    const productQuantity = document.getElementById("product-quantity").value
    const currentResult = document.getElementById("result")
    let result = ''

    if (!productName || !productPrice || !productQuantity) return alert("please fill the all fields")

    const total = productPrice * productQuantity
    result = total > 5000 ? "Discount Eligible" : "No Discount"
    currentResult.innerHTML = result
})


// Question 3
const gradeBtn = document.getElementById("grade-btn")

gradeBtn.addEventListener("click", () => {
    err = {}
    let grade;
    const name = document.getElementById("student-name").value
    const mark = document.getElementById("student-mark").value
    const errName = document.getElementById("err-name")
    const errMark = document.getElementById("err-mark")
    const result = document.getElementById("grade-result")


    if (!name) err.name = "enter student name"
    if (!mark) err.mark = "enter student mark"
    if (Object.keys(err).length > 0) {
        errName.innerHTML = err.name || ""
        errMark.innerHTML = err.mark || ""
        return
    }
    const studentMark = Number(mark)

    if (studentMark >= 90) grade = "A Grade"
    else if (studentMark >= 75) grade = "B Grade"
    else if (studentMark >= 50) grade = "C Grade"
    else grade = "Fail"

    result.innerHTML = grade || ''
    console.log(grade);

    errName.innerHTML = ""
    errMark.innerHTML = ""
})


// Question 4
const bonusBtn = document.getElementById("bonus-btn")

bonusBtn.addEventListener("click", () => {
    err = {}
    let bonus;
    const name = document.getElementById("employee-name").value
    const salary = document.getElementById("employee-salary").value
    const errName = document.getElementById("err-empName")
    const errSalary = document.getElementById("err-empsalary")
    const bonusresult = document.getElementById("bonus-result")


    if (!name) err.name = "enter employee name"
    if (!salary) err.salary = "enter employee salary"
    if (Object.keys(err).length > 0) {
        errName.innerHTML = err.name || ""
        errSalary.innerHTML = err.salary || ""
        return
    }
    const employeeSalary = Number(salary)

    bonus = employeeSalary > 30000 ? "Bonus 5000" : employeeSalary > 20000 ? "Bonus 3000" : "Bonus 1000"


    bonusresult.innerHTML = bonus || ''
    console.log(bonus);

    errName.innerHTML = ""
    errSalary.innerHTML = ""
})


// <!--  Question - 5  -->

const todoBtn = document.getElementById("todoBtn")
const div = document.getElementById("container")
const count = document.getElementById("task-count")
const ul = document.createElement('ul')
let taskCount;
let skills = []

const deleteFun = (inx) => {
    skills = skills.filter((item, index) => index !== inx);
    updateCount(skills);
    ListShow(skills);
}
const updateCount = (arr) => {
    taskCount = arr.length > 0 ? `Task Count ${skills.length}` : "No Task Here"
    count.innerHTML = taskCount
}

const ListShow = (arr) => {
    ul.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li')
        const button = document.createElement('button')

        li.textContent = arr[i]
        button.textContent = "Delete"

        button.addEventListener("click", () => {
            deleteFun(i)
        })


        li.appendChild(button)
        ul.appendChild(li)
    }
}

todoBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const toduSkills = document.getElementById("skills").value
    const errTodo = document.getElementById("err-todo")

    if (!toduSkills) return errTodo.innerHTML = "please enter you skills" || ''
    skills.push(toduSkills)
    console.log(skills);
    updateCount(skills)
    ListShow(skills)
    errTodo.innerHTML = ''
    document.getElementById("skills").value = ''
})

taskCount = "No Task Here"
count.innerHTML = taskCount
div.appendChild(ul)


// <!--  Question - 6  -->

const search = document.getElementById('search-user')
const userdiv = document.getElementById("user-container")
const userUl = document.createElement('ul')
let userList = []

search.addEventListener("input", () => {
    const serchUser = search.value.toLowerCase()
    const filteruser = userList.filter((item) => {
        return item.name.toLowerCase().includes(serchUser)
    })
    displayUsers(filteruser)
})

const displayUsers = (user) => {
    userUl.innerHTML = ''
    console.log(user);
    user.map((itm, inx) => {
        const userli = document.createElement('li')
        userli.textContent = itm?.name ? itm?.name : "No User"
        userUl.appendChild(userli)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            userList = data
            displayUsers(data)
        })
})
userdiv.appendChild(userUl)










