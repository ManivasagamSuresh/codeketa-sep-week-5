// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  var a = userInput[0].split(" ");
//   console.log(a);
//   console.log(a.length);
  strings = a.map(function (string) {
    return string.replace(/[aeiouAEIOU]/g, '');
});

console.log(...strings);

  //end-here
});