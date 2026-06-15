let n = 5;
for (let i=1; i<5; i++) {
    let pattern = " ";

for (let j =0; j<i; j++) {
    pattern += "*";
for (let j =0; j<i-1; j++) {
    pattern = " ";
}
}
console.log(pattern);
}

