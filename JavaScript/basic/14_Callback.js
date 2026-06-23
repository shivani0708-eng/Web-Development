function maggielana(cb){
    console.log("maggie lene gaye");
    setTimeout(()=>{
    console.log("maggie aa gayi");
    cb(maggieKhana);//maggiekhana bheja as a callback
    },2000); //representing it takes 2sec to get maggie from shop
}
function maggieBanana(cb){
    console.log("maggie banana start....");
    setTimeout(()=>{
    console.log("maggie ban gayi");
    cb();
    },2000);//representing it takes  2 sec to prepare maggie
}
function maggieKhana(){
    console.log("maggie khana start....");
    setTimeout(()=>{
    console.log("maggie khana khatam");
    },2000);
}

maggielana(maggieBanana); //cb ->maggiebanana bheja as a call back
//maggieBanana();
//maggieKhana();