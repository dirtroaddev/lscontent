// contains 'Spot'
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

ages.hasOwnProperty('spot');

// capitalize first letter of each word
let munstersDescription = "the Munsters are CREEPY and Spooky.";

let fix = munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();

// true or false
// true 
// false 

// add to the object
let additionalAges = { Marilyn: 22, Spot: 237 };

for (age in additionalAges) {
    ages[age] = additionalAges[age]
}

// alternate method 
// Object.assign(ages, additionalAges);

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.includes('Dino');
str2.includes('Dino');


// add dino to an array
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');

// adds multiple members
flintstones.push('Dino', 'Hoppy');


// indexof, slice
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
let index  = advice.indexOf('house');
let piece = advice.slice(0, index);


// nested arrays
// let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
flintstones = flintstones.reduce((elem, red) => elem.concat(red), []);

// convert from object to array
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
Object.entries(flintstones)[2]


// isarray
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
Array.isArray(numbers);
Array.isArray(table);

// padding
let padding = Math.floor((40 - title.length) / 2);
title.padStart(padding + title.length);

// one line count the letter
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
let numberOfTs = statement1.split('').filter((char) => char === 't', 0).length;
let numberOfTs2 = statement2.split('').filter((char) => char === 't', 0).length;