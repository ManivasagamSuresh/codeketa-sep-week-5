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

   var a = userInput[0].split(' ');
var b=[];
// console.log(a);
// console.log("THE"=="the");
for(var i=0;i<a.length;i++)
{
    if(a[i]=="an" || a[i]=="a" || a[i]=="the" || a[i]=="An" || a[i]=="A" || a[i]=="The")
{
    // console.log(a[i+1]);
    b.push(a[i+1]);
}
}
console.log(...b);

  //end-here
});