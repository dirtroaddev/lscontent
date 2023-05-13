// create a function that leaves out the odd items
// create the function called oddities that accepts an array as a param
// loop through the array only returning every other number
// use filter

function oddities(arr) {
    return arr.filter((elem, index) => index % 2 === 0 ? elem : null);
}





console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []