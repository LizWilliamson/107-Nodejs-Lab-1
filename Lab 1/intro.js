var math = require("./myMathLibs");

console.log("Hello from NodeJS");

function test(){
    console.log("Hello, I'm a fn");
}

function helloMe(name){
    console.log("Hello and welcome " + name);
}

function printSomeEvens(howMany) {
    var printed = 0;
    for(var i=0; printed < howMany; i++){

        if(printed < howMany){
            if(math.isItEven(i)){
                console.log(i);
                printed +=1;
            }
        }

    }
}



function init(){
    helloMe("Liz"); 


var res = math.lowestNum(9, 10);
console.log(res);

var res2 = math.sum(21,21)
console.log(res2);

var res3 = math.divide(10,2);
var res4 = math.divide(10,0);
var res5  = math.divide(0,40);
console.log(res3);
console.log(res4);
console.log(res5);

console.log(math.version());

var nums = [1912, 289, 12398, 2340970, 123409, 0987123]
var low =  math.lowestInArray(nums);
console.log(low);

console.log(math.isItEven(42));
console.log(math.isItEven(13253));
console.log(math.isItEven(65922973));

printSomeEvens(150);



}

init();