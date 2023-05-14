var readlineSync = require("readline-sync");

let x = readlineSync.question("Enter the number:")

if(x%2==0){
    console.log("It is an Even Number");
}
else{
    console.log("It is a Odd Number");
}