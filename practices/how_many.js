// create a function that accepts an array
// use a for....in loop to loop through the array
// count how many instances are in the variable of each
// return the results



function countOccurrences(arr) {
    let object = {}

    for (let i = 0; i < arr.length; i++) {
        if (object[arr[i]] === undefined) {
            object[arr[i]] = 1
        } else {
            object[arr[i]] += 1
        }
    }
    return object;
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));