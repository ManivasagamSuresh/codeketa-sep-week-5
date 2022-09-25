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
  var b = +userInput[1];
  var c = +userInput[2];
  var d=c-1
   for (var i=d;i<a.length;i=(i+c))
 { 
     if(b==1)
  {
     var z= a[i].toLowerCase();
     a.splice(i,1,z);
  }
  else
  {
     var y=a[i].toUpperCase();
     a.splice(i,1,y);
  }
 }
 console.log(a.join(''));

  //end-here
});