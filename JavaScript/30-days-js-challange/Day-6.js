// create array of numbers from 1 to 5 and console it

let numbers = [1, 2, 3, 4, 5]
console.log(numbers)

// access the first and last elements of the array and console them

console.log("First element: " + numbers[0])
console.log("Last element: " + numbers[numbers.length - 1])

// use the push method to add a new element to the end of the array and console the updated array

numbers.push(6)
console.log("Updated array: " + numbers)

// use the pop method to remove the last element from the array and console the updated array

numbers.pop()
console.log("Updated array after popping: " + numbers)

// use the shift method to remove the first element from the array and console the updated array

numbers.shift()
console.log("Updated array after shifting: " + numbers)

// use the unshift method to add a new element to the beginning of the array and console the updated array

numbers.unshift(0)
console.log("Updated array after unshifting: " + numbers)

// use the map method to create a new array with each element doubled and console it

let doubledNumbers = numbers.map(num => num * 2)
console.log("Doubled array: " + doubledNumbers)

// use the filter method to create a new array with only the even numbers and console it

let evenNumbers = numbers.filter(num => num % 2 === 0)
console.log("Even numbers array: " + evenNumbers)

// use the reduce method to find the sum of all the elements in the array and console it

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log("Sum of numbers: " + sum)

// use for loop to iterate over the array and console each element

for (let i = 0; i < numbers.length; i++) {
    console.log("Value at index " + i + ": " + numbers[i])
}

// use forEach method to iterate over the array and console each element

numbers.forEach(num => console.log("Value: " + num))

// create a two dimensional array (matrix) and console it

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log("Matrix:")

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i])
}

// access and log every element in the matrix

console.log("First row: " + matrix[0])
console.log("Second row: " + matrix[1])
console.log("Third row: " + matrix[2])

console.log("First column: " + matrix.map(row => row[0]))
