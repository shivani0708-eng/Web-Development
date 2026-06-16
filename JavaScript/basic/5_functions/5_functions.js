function greet(name){
    //function definition
   // return "Hello"+name+"!";
   return `Hello,${name}!`;//template literal

  l
}

//function call
let message=greet("Shivani");
    console.log(message);

//direct call
console.log(greet("sethiya"));

let expression=function or(name){//function exprression
    //const expression=function or(name){//function expression
    
    return `Hello,${name}!`;
};
console.log(expression("shivani"));

const arrowFunc = (name)=> {

return `Hello, ${name}!`;
};
console.log(arrowFunc("shivani"));
//function receive karta hai use parameter bolte hai 
//function ko jo value de rahe hai vo argument

