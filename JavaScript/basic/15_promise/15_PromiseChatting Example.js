// function checkNumber(num) {
//     return new Promise((resolve, reject) => {
//         if (num % 2 === 0) {
//             resolve(num + " is Even");
//         } else {
//             reject(num + " is Odd");
//         }
//     });
// }

// checkNumber(10)
//     .then((result) => {
//         console.log("Success:", result);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });


function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(" is Even");
        } else {
            reject(" is Odd");
        }
    });
}

checkNumber(10)
    .then((data) => {
        console.log(data);
    })
    .catch((data) => {
        console.log(data);
    });