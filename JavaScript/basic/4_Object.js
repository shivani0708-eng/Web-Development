let user = {
    name: "apple",

    age: 25,
    isStudent: true,
    "": "Empty string",//empty string . se index ni hogi
    " ": "space key",
    "last name": "max",//key or value sath me rahenge to .access hoga
};
console.log(user);
console.log(user.name);
console.log(user.age);
//console.log(user.''); //error 

console.log(user["name"]);
console.log(user["age"]);
//empty string key and space key not accessed by 
console.log(user[""]);
console.log(user[" "]);
console.log(user["last name"]);
//key containing space not accessed by.

