// If-else statement

// program to check if a number is positive, negative, or zero
// script to check if a number is positive, negative, or zero using an if-else statement

let a1 = 10 // change this value to test different scenarios

if (a1 > 0) {
    console.log(a1 + " is positive")
} else if (a1 < 0) {
    console.log(a1 + " is negative")
} else {
    console.log(a1 + " is zero")
}

// program to check if a person is eligible to vote based on their age
// script to check if a person is eligible to vote based on their age using a nested if-else statement

let b1 = 18 // change this value to test different scenarios

if (b1 >= 18) {
    console.log("Eligible to vote")
} else {
    console.log("Not eligible to vote")
}

// Nested if-else statement

// program to find the largest number among three numbers
// script to find the largest number among three numbers using a nested if-else statement

let c1 = 10, c2 = 20, c3 = 30 // change these values to test different scenarios

if (c1 > c2) {
    if (c1 > c3) {
        console.log(c1 + " is the largest number")
    } else {
        console.log(c3 + " is the largest number")
    }
} else {
    if (c2 > c3) {
        console.log(c2 + " is the largest number")
    } else {
        console.log(c3 + " is the largest number")
    }
}

// switch statement

// program to determine the day of the week (1-7)
// script to determine the day of the week (1-7) using a switch statement

d1 = 3 // change this value to test different scenarios

switch (d1) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

// program to assign a grade based on a percentage
// script to assign a grade based on a percentage using a switch statement

let e1 = 85 // change this value to test different scenarios

if (e1 >= 90) {
    console.log("Grade: A")
} else if (e1 >= 80) {
    console.log("Grade: B")
} else if (e1 >= 70) {
    console.log("Grade: C")
} else if (e1 >= 60) {
    console.log("Grade: D")
} else {
    console.log("Grade: F")
}


// combine conditions

// program to check if year is a leap year
// script to check if year is a leap year using a combination of conditions

let f1 = 2024 // change this value to test different scenarios

if ((f1 % 4 === 0 && f1 % 100 !== 0) || f1 % 400 === 0) {
    console.log(f1 + " is a leap year")
} else {
    console.log(f1 + " is not a leap year")
}