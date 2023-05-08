// create a function that if the number is a multiple fo 3 and 5 then it multiples them
// create a function called multisum
// use a for loop
// create a conditional to check if number is a multiple of 3 and 5

function multisum(num) {
    let multiple = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiple += i;
        }
    }

    console.log(multiple);
}




multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168