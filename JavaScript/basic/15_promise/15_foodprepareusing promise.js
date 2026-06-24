function OrderPlace(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("order placed ");
    resolve();
    },1000);
 }); //representing it takes 2sec to get maggie from shop
}

function foodPrepared(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("food prepared ");
    resolve();
    },1000);
 }); //representing it takes 2sec to get maggie from shop
}
function foodDeliver(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("Food Deliver ");
    resolve();
    },1000); 
  });//representing it takes 2sec to get maggie from shop
}

OrderPlace()
.then(()=> foodPrepared())
.then(()=>foodDeliver())
.then(()=>{
     console.log("enjoy your food");
});

