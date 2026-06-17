

// 1. Function & Arguments (7 Questions)
// Create a function that takes a name as an argument and returns a welcome message.
// Create a function that accepts two numbers and returns their sum.
// Create a function that accepts an array as an argument and returns its length.
// Create a function that accepts a string and returns it in uppercase using an inbuilt method.
// Create a function that accepts a string and returns the first character.
// Create a function that accepts a number and checks whether it is even or odd.
// Create a function that accepts a string and returns the reversed string using inbuilt methods.


// Create a function that takes a name as an argument and returns a welcome message.
const welcome = (name) => {
    return console.log(`Welcome ${name}`)
}

welcome("suresh")

// Create a function that accepts two numbers and returns their sum.
const add = (a,b) => {
    return a+b
}

console.log(add(10, 17));

// Create a function that accepts an array as an argument and returns its length.
const arrFun = (arr) => {
    return arr.length
} 

console.log(arrFun([1,2,4,6,7,8,9]))

// Create a function that accepts a string and returns it in uppercase using an inbuilt method.
const toUpper = (str) => {
    return str.toUpperCase()
} 

console.log(toUpper("suresh"));

// Create a function that accepts a string and returns the first character.
const firstChar = (str) => {
    return str.charAt(0)
    // return str[0]
}

console.log(firstChar("suresh"));

// Create a function that accepts a number and checks whether it is even or odd.
const numberCheck = (n) => {
    return n % 2 === 0 ? "Even" : "Odd"
}

console.log(numberCheck(2));

// Create a function that accepts a string and returns the reversed string using inbuilt methods.
const reversed = (str) => {
    return str.split("").reverse().join("")
} 

console.log(reversed("suresh"));



