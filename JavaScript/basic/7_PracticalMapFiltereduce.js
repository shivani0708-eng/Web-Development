//lowercase string to uppercase through map
let words = ["apple", "banana", "Orange"];
let upper = words.map(w=> w.toUpperCase());
console.log(upper);



let cart=[
    {id:1,name:"laptop",price:100},
    {id:1,name:"Mobile",price:200},
    {id:1,name:"Computer",price:300},
];
//let names = cart.map((item) =>item.name+" "+item.price);
let names = cart.map((item) =>({
    name: item.name,
    price:item.price,
}));
console.log(names);


//jiski length 5 ya 5 se big hai usko print karna hai 
let list=["apple","banana","cat","elephant","dog"];
let finalresult = list.filter(w=> w.length >= 5);
console.log(finalresult);


//isme 18+ age filter use karke map ke through name or age print karna hai 
let people = [
    { name: "A", age: 16 },
    { name: "B", age: 22 },
    { name: "C", age: 17 },
    { name: "D", age: 14 },
];
let user=people
    .filter((p)=>p.age>=18)
  .map((p)=>({
    name:p.name,
    age:p.age,
  }));
  console.log(user);
