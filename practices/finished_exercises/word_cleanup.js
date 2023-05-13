// create a function that accepts a string
// loop through the string
// determine if the character is a letter or not
// return the string with out non letter characters

function cleanUp(str) {
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    let words = '';
    for (let i = 0; i < str.length; i++) {
        if (alph.includes(str[i])) {
            words += str[i];
        } else {
            words += ' '
        }
    }
    let finalWord = words.split(' ').filter(elem => elem.length > 0).join(' ');
    console.log(` ${finalWord} `);
}

cleanUp("---what's my +*& line?");    // " what s my line "