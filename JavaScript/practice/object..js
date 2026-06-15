let user ={
    name:"Shivani",
    age:20,
    dog:function(){
        return "Bark";
    },
};
user.subject ="DSA";
user.grade= 80;//. se access
//user["grade"]=80; ///string se acces

console.log(user);
console.log(user.dog());
