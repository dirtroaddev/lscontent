// create a program to get the second to the last word
// create a  function that accepts a string
// convert string to an array
// return second to last array element

function penultimate(str) {
    let strArr = str.split(' ');
  return strArr[strArr.length - 2];
}


console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true