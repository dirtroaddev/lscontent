//  replace string
let advice = "Few things in life are as important as house training your pet dinosaur.";

advice.replace("important", "urgent");

// replace all occurrences
advice.replaceAll("important", "urgent");

//  reverse and sort replacements
let arr = ['a', 'b', 'c' ,'d']
let newArr = arr.slice(0).reverse();


let arrTwo = [1, 2, 3, 4];
let newArrTwo = [...arrTwo].sort((num, num2) => num2 - num);

// ** BONUS ** //
// let newArr = [];
arr.forEach((element, index )=> newArr[arr.length - 1 - index] = element);


// includes
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

numbers.includes(number1);
numbers.includes(number2);

// add to front of string
let famousWords = "seven years ago...";
"Four score and " + famousWords;
"Four score and ".concat(famousWords);


// splice
// let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);

// nested arrays
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// validate an email using regex 
