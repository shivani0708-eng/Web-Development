let employee = [
    { id: 1, name: "A", salary: 10000 },
    { id: 2, name: "B", salary: 20000 },
    { id: 3, name: "C", salary: 30000 },
    { id: 4, name: "D", salary: 40000 },
];
let totalSalary = employee.reduce((sum, emp) => {
    return sum + emp.salary;
}, 0);

let averageSalary = totalSalary / employee.length;

console.log("Average Salary:", averageSalary);