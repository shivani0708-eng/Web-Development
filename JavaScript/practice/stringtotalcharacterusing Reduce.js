let list = ["apple", "banana", "cat", "elephant", "dog"];
let total = list.reduce((sum, word) => sum + word.length, 0);
console.log(total);