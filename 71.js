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

  var a = userInput[0].split("");
//   console.log(a);
//   console.log(a.length);
  if(a.length%2==0)
  {
      console.log(1);
  }
  else
  {
      console.log(0);
      
  }

  //end-here
});