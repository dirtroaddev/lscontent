// create a function called triangle that creates a right triable
// take a number parameter
// create a loop with a nested loop
// outer loop should push the stars and inner loop should push the space

function triangle(num) {
    let str = '';
    for (let i = 0; i < num; i++) {
        
        for (let h = i + 1; h < num; h++) {
            str += ' ';
           
        }
        for (let j = i + 1; j > 0; j--) {
            str += '*';
           
        }
        str += '\n';
    }
    str += ' ';
    console.log(str);
}



triangle(5);
triangle(9);