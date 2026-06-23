//set time out (function hai ) => set kiye hue timeke bad call karega 


//set timeout
//function wait(){
    //let time =new Date().getTime();
    //while(new Date().getTime()< time + 5000) {}
      //  return time;

    // setTimeout(() => {
    //     console.log("Timeout passed");
    // },0);

//     console.log("Hello");
// wait();
// console.log("world");

// console.log("Random tasks");
// for(let i=0; i<10; i++){
//     console.log(i);
// }
//}
    

//set interval continuous run after time out

function wait(){
   var id = setInterval(()=>{   
        console.log("2 second passed");
    },2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("code stopped");
   },5000);
}
console.log("Hello");
wait();
console.log("world");

