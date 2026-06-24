function ATM(amount,balance){
    return new Promise((resolve, reject) => {
    let success="amount withdraw successfully";
    let failed="insufficient balance";
        if (balance>amount) {
            resolve("withdraw");
        } else {
            reject(" insufficient");
        }
    });
}
ATM(1500,1600)
    .then((data) => {
        console.log(data);
    })
    .catch((data) => {
        console.log(data);
    });