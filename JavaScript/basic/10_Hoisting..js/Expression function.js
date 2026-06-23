
//Function Expression  ko variable me store karte hai 
//var undefined
//let does not access before initialization
console.log(dance); //undefined
var dance = function() {
    console.log("Dancing");
};
dance();
console.log(dance);
//function expression and arrow function follow the result of variables not function