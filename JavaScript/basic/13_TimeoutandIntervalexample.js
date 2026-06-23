// let count =0;
// const intervalId = setInterval(()=> {
//     count++;
//     console.log("Interval:" , count);
//     if (count ==3){
//         clearInterval(intervalId);
//     }
// },1000);
// setTimeout(()=>{
//     console.log("Timeout");
// },2500);
 

//let use=> let globse matlab()
// for(let i=1; i<4; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000);
// }


//  event loop var use=> var only one global variable 
// for(var  i=1; i<4; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000);
// }



let count=3;

const countdown=setInterval(() =>{  //set interval ke inner side callback function
    if(count>0){
        console.log(count);
        count--;
    }else{
        console.log("Ended");
        clearInterval(countdown);
    }
},1000);