let fruits =["Apple","Mango","Apple","Orange","Apple","Mango"]

let occurence= fruits.reduce((acc, curr) => {
    //acc["apple"]
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

console.log(occurence);