// write a function to check if number is even or odd

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is an even number")
    } else {
        console.log(number + " is an odd number")
    }
}

// write function to calculate square of the given number

function calculateSquare(number) {
    return number * number
}

// write a function to find the maximum of two numbers

function findMax(num1, num2) {
    return Math.max(num1, num2)
}

// write a function to concatenate two strings

function concatenateStrings(str1, str2) {
    return str1 + str2
}

// write an arrow function to calculate the sum of two numbers

const addNumbers = (num1, num2) => num1 + num2

// write an arrow function to check if a string contains a specific character

const containsCharacter = (str, character) => str.includes(character)

// write a function to find the product of two numbers. provide a default value for the second number if not provided

function multiplyNumbers(num1, num2 = 1) {
    return num1 * num2
}

// write a function that takes person's name and age as parameters and returns a greeting message

function greetPerson(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`
}

// write a higher-order function that takes a function and a number, and calls the function that many times

function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func()
    }
}

// write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result

function applyFunctions(func1, func2, value) {
    return func2(func1(value))
}
