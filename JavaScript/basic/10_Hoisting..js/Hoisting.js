//hoisting variable or function se declaration ko top par lekar jata hai 
//memory creation memory execution use hota hai 
//temporal that zone matlab x initialized na ho  initialize se pahle call karte hai 
//var ko access kar sakte hai let or const ko access nahi kar sakte hai 

console.log(x);
var x=5;
console.log(x);

//function ke through hoisting
sayHello("Rakesh");
function sayHello(name){
    console.log(`Hello,${name}`);
}
sayHello("Ankit");


console.log(x); ///temporal and Zone
let x=5;
console.log(x);





