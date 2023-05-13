// remove array elements => 3 ways
let numbers = [1, 2, 3, 4];
numbers.length = 0;
for (let i = 0; i < numbers.length; i++) {
    numners.pop();
}
numbers.splice(0);


//  single return
function isColorValid(color) {
    return color === "blue" || color === "green";
  }

  isColorValid = color => color === "blue" || color === "green";