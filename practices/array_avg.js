// create a function that accepts an array
// add up all of the elements in the array
// dive the new number by the length of the array
// return the average

function average(arr) {
    return Math.floor(arr.reduce((accum, rec) => accum += rec , 0) / arr.length);
}



console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40