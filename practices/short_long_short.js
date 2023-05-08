
function shortLongShort(str1, str2) {
    if (str1.length < str2.length) {
        console.log(str1 + str2 + str1)
    } else {
        console.log(str2 + str1 + str2);
    }
}

shortLongShort('abc', 'defgh');
shortLongShort('abcde', 'fgh');