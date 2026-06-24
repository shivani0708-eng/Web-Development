//callback hell se bachne ke liye promise use hoga
//promise or callback hell
// there are  three state
// 1. pending
// 2.fullfilled
// 3.rejected
//promise.all()function array me use hoga always promise P capital
//promise.race() me reject or successfully dono hoga
//promise.any()me sabse sabse pahle succefully complete hoga
//Promise.allsettled()  

const p=new Promise((res,rej)=>{
    let data ="Data Received";
    let Success=true;

    if(Success){
        res(data);
    }else{
        rej();
    }
});

p.then((data)=>{ //then resolved ke liye use hooga
    console.log(data);
    cb();
}).catch(()=>{  //catch  reject ke  liye use hoga
    console.log("Data not received");
}).finally(()=>{
    console.log("Function Ended");
});




