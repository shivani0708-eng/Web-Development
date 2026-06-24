const p=new Promise((res,rej)=>{
    let data ="Data Received";
    let Success=true;

    if(Success){
        res(data);
    }else{
        rej();
    }
});
p.then((data)=>{ 
    console.log(data);
    return 2;  //promise always return a promise
})
.then((num)=>{
    console.log(num*2);
    return num*2;  //promise always returnns as a promise
})
.then ((num)=>{
    console.log(num*2);
})

