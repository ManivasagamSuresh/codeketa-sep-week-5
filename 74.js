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
  for (var i =0; i<a.length;i++)
  {
      if(a[i]==a[i+1])
     { a.splice(i,2);}
  }
  console.log(a.join(''));

  //end-here
});