// function OrderPlaced(cb){
//     console.log("order placed kiya");
//     setTimeout(()=>{
//     console.log("order placed ho gaya");
//     cb(foodDelivered);//maggiekhana bheja as a callback
//     },2000); //representing it takes 2sec to get maggie from shop
// }
// function foodPrepared(cb){
//     console.log("foodPrepared karna start");
//     setTimeout(()=>{
//     console.log("food prepared ho gaya");
//     cb();
//     },2000);//representing it takes  2 sec to prepare maggie
// }
// function foodDelivered(){
//     console.log("food Delivered start ");
//     setTimeout(()=>{
//     console.log("food Delivered khatam");
//     },2000);
// }

// OrderPlaced(foodDelivered); //cb ->maggiekhanana bheja as a call back
// //maggieBanana();
// //maggieKhana();



//different new type
function OrderPlace(cb){
    setTimeout(()=>{
    console.log("order placed ");
    cb();
    },1000); //representing it takes 2sec to get maggie from shop
}

function foodPrepared(cb){
    setTimeout(()=>{
    console.log("food prepared ");
    cb();
    },1000); //representing it takes 2sec to get maggie from shop
}
function foodDeliver(cb){
    setTimeout(()=>{
    console.log("Food Deliver ");
    cb();
    },1000); //representing it takes 2sec to get maggie from shop
}

OrderPlace(()=>{
    foodPrepared(()=>{
        foodDeliver(()=>{
            console.log("enjoy your food");

        });
    });
});

