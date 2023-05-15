// create a function that accepts two arrays
// create an empty array that
// loop through the arrays and multiple one element by the same element in other array
// push the new multiplied number to a new array

function multiplyList(arr1, arr2) {
    let newArr = [];
    for(let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i] * arr2[i]);
    }
    return newArr;
}


console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]