// create a function that accepts a stirng
// create a loop that loops through the array
// use a conditional statement to check whether something exists in an object or now
// return the object



function wordSizes(str) {
    if (str.length === 0) {
        return {}
    } 

    // console.log(str.replace(/'s/gi, 's').replace(/[^a-z0-9]/gi, ' ').split(' '))
    return str.replace(/'s/gi, 's').replace(/[^a-z0-9]/gi, ' ').split(' ').reduce((accum, curr) => {
        if (curr.length > 1) {
        if (accum[curr.length] === undefined) {
            accum[curr.length] = 1
        } else {
            accum[curr.length] += 1
        }
    }
        return accum;
}, {})}

// console.log(wordSizes("what's the real"));
// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));   

// {}
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}