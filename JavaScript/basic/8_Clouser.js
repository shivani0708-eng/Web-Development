//clouser apne parent ke sath variable leke aata hai child me
var a=10;
function parent(){
    let parentVar ="I am Parent";

    return function child(){
        let childVar="I am Child";

        console.log(parentVar);
        console.log(childVar);
        console.log(a);
    };
}
let func=parent();
func();