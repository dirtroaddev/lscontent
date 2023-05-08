// welcome stranger function
// create a function called greetings
// create a loop th at will loop through the array
// add each element to a string

function greetings(arr, obj) {
    let str = 'Hello, ';
    for (let i = 0; i < arr.length; i++) {
        
        str += arr[i];
        str += ' ';
    }

    return str + `! Nice to have a ${obj.title} ${obj.occupation} around.`;
}

console.log(
    greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
  );
  // logs Hello, John Q Doe! Nice to have a Master Plumber around.