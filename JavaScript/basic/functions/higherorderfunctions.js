//callback function
function sayGoodbye(){
    console.log("Goodbye!");
}
//higher order function taking a function as an argument
function executeAction(action){
    console.log("Executing action...");
    action();//calls the function passed to it 
}
executeAction(sayGoodbye)