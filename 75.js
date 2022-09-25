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

   var a = userInput[0].split('');
let uniq =[...new Set(a)];
// console.log(uniq);
if(uniq.length==3)
  {
      console.log("Wonder");
  }
 else{
     console.log(-1)
 }

  //end-here
});