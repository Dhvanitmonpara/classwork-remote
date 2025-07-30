// for loop
// write a program to print 1 to 10 numbers using a for loop

for (let i = 1; i <= 10; i++) {
    console.log(i) // prints numbers from 1 to 10
}

// wap to print multiplication table of 5

for (let i = 0; i <= 10; i++) {
    console.log("5 * " + i + " = " + 5 * i) // prints multiplication table of 
}

// while loop
// wap to calculate sum of the numbers from 1 to 10 using a while loop

let i = 1, sum = 0;
while (i <= 10) {
    sum += i;
}

console.log("Sum of numbers from 1 to 10 is: " + sum)

// wap to print numbers from 10 to 1 using a while loop

i = 10
while (i >= 1) {
    console.log("The value of i is " + i)
}

// do-while loop
// wap to print numbers from 1 to 5 using a do-while loop

i = 1
do{
    console.log("The value of i is " + i)
}while(i <= 5)

// wap to calculate the factorial of number using do-while loop

i=1
let num = 10

do {
    num *= i;
} while (i <= num);

console.log("Factorial of the given number is: " + num); 

// Nested loops
// wap to print a pattern of numbers from 1 to 5 using nested loops

// let star = 0
// for (let i = 0; i <= 5; i++) {
//     console.log("*")    
// }

let str = ""
for (let i = 0; i <= 5; i++) {
    str = ""
    for (let j = 0; j <= i; j++) {
        str += "*"
    }
    console.log("\n" + str)
}

// loop control statements
// wap to print number from 1 to 10, but skip number 5 using continue statement

for (let i = 0; i <= 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log("Value of i is: " + i)
}

// wap to print number from 1 to 10, but stop printing when number 7 is encountered using break statement

for (let i = 0; i <= 10; i++) {
    if(i === 7) {
        break;
    }
    console.log("Value of i is: " + i)
}
