let value = 5; // ans should be 120
let sum = 0;
let factorial = 1;
for (let i = 1; i <=value; i++) {
    sum += i * 1;
    console.log('\ni = ' +i);
    console.log(sum);
    factorial *= i;
    console.log('fact = ' +factorial);
}

console.log("The answer is " + sum);
console.log("The answer is " + factorial);

