function maggielana(){
    return new Promise((resolve,reject)=>{
    console.log("maggie lene gaye");
    setTimeout(()=>{
    console.log("maggie aa gayi");
     resolve();//maggiekhana bheja as a callback
    },2000); 
  });//representing it takes 2sec to get maggie from shop
}
function maggieBanana(){
    return new Promise((resolve,reject)=>{
    console.log("maggie banana start....");
    setTimeout(()=>{
    console.log("maggie ban gayi");
     resolve();
    },2000);
  });//representing it takes  2 sec to prepare maggie
}
function maggieKhana(){
    return new Promise((resolve,reject)=>{
    console.log("maggie khana start....");
    setTimeout(()=>{
    console.log("maggie khana khatam");
    resolve();
    },2000);
 });
}

maggielana()
.then(()=> maggieBanana())
.then(()=>maggieKhana())
.then(()=>{
    console.log("ab bartan dho lo");
});

//cb ->maggiebanana bheja as a call back
//maggieBanana();
//maggieKhana();