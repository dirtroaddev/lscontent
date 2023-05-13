// create a function that adds a banner and takes a message as input
// add the messages with the top and bottom banner
// build hte banner sides and tops
// return the banner

function logInBox(message) {
    let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
    let emptyLine = `|${" ".repeat(message.length + 2)}|`;
  
    console.log(horizontalRule);
    console.log(emptyLine);
    console.log(`| ${message} |`);
    console.log(emptyLine);
    console.log(horizontalRule);
}