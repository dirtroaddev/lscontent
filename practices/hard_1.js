// which one works
function first() {
    return {
      prop1: "hi there"
    };
  }
  
  function second() {
    return
    {
      prop1: "hi there"
    };
  }
  
  console.log(first());
  console.log(second());

  // fix Bens code
  // Alyssa reviewed Ben's code and said, 
// "It's a good start, but you missed a few things.
// You're not returning a false condition,
// and you're not handling the case 
// when the input string has more or less than 4 components, 
// e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparateWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
     return false;
    }
  }

  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}


