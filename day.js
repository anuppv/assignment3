var readlineSync = require("readline-sync");

let d = readlineSync.question("Enter the day in number:")

if(d==1){
    console.log("It's Monday of the week");
}else if(d==2){
    console.log("It's Tuesday of the week");
}else if(d==3){
    console.log("It's Wednesday of the week");
}else if(d==4){
    console.log("It's Thursday of the week");
}else if(d==5){
    console.log("It's Friday of the week");
}else if(d==6){
    console.log("It's Saturday of the week");
}else if(d==7){
    console.log("It's Sunday of the week");
}