let arr = [20, 30.3, "lol, yaha kuchh bhi likh skte ho", false];

// Arrays can be changed in later but not stringcan be.

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr.length);

// Array is object in javascript
console.log(typeof arr);

console.log('\n\nArray using for loop\n');

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
