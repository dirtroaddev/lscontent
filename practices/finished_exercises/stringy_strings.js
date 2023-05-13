// create a function to add 1s and 0s
// use a loop to place the numbers
// use a conditional to decide where to place the numbers
// even = 1s and odds = 0's 

function stringy(num) {
    let str = '';
    for(let i = 0; i < num; i++) {
        if (i % 2 === 0) {
            str += 1;
        } else {
            str += 0;
        }
    }
    console.log(str);
}


stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"