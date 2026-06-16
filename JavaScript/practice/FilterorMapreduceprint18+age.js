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