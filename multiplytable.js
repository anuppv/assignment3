var readlineSync = require("readline-sync");

let z = readlineSync.question("Enter the number: ")

for(let i=1;i<=10;i++){
    console.log(i+"*"+z+"="+z*i);
}