// let s="hello";
// s[0]="h";  
// console.log(s);
// //console.log(s.length); //string ki length

// let s="hello";
// let str2= s.toUpperCase();
// let str3=s.slice(0,3);
// console.log(s);//jello
// console.log(str2);//JELLO
// console.log(str3);//jel



let arr=[1,2,3,true,"apple"];
console.log(arr);

arr.push("mango"); //push /add element at end
console.log(arr);
arr.pop();   //pop/remove element at end
console.log(arr);

arr.unshift("orange");//add element at start
console.log(arr);
let x=arr.shift();//remove element at start
console.log(arr);
console.log(x);

arr.splice(2,0,4,"yellow");//add the element at middle index of array
console.log(arr);

for(let a=0; a<arr.length; a++){
    console.log(arr[a]);
}

for(let a of arr){ //for..of loop 
    console.log(a);
}


