//clouser apne parent ke sath variable leke aata hai child me
// var a=10;
// function parent(){
//     let parentVar ="I am Parent";

//     return function child(){
//         let childVar="I am Child";

//         console.log(parentVar);
//         console.log(childVar);
//         console.log(a);
//     };
// }
// let func=parent();
// func();



//function ke through
function createCounter(){
    let count=0;

return function(){
    count++;
    console.log(count);
};
}

let func=createCounter();
func();//count++ =>1
func();//count++  =>2
func();