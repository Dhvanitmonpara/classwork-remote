// use template literals to create a string that includes the variables for a person's name and age and log it

const userName = "John Doe"
const age = 30

const greeting = `Hello, my name is ${userName} and I am ${age} years old.`
console.log(greeting)

// create a multi-line string with the person's name, age, and favorite color

const personInfo = `
Name: ${userName}
Age: ${age}
Favorite color: Blue
`
console.log(personInfo)

// use array destructuring to extract the person's name and age from an array

const person = [userName2, age2]
const [userName2, age2] = person

console.log("object destructuring:", userName2, age2)

// use the spread operator to create a new array that includes element of existing array, plus additional elements, and log the new array

const numbers = [1, 2, 3]
const additionalElements = [4, 5, 6]
const combinedArray = [...numbers, ...additionalElements]

console.log("combined array:", combinedArray)

// use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0)
}

console.log("sum:", sum(1, 2, 3, 4, 5))

// write a function that takes two parameters and returns their product, with the second parameter having the default value of 1. log the result calling the function with and without the second parameter

function multiplyNumbers(num1, num2 = 1) {
    return num1 * num2
}

console.log("product:", multiplyNumbers(5, 10))
