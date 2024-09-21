//Example
let promise = new Promise((resolve, reject) => {
    error=true
    if(error) {
        reject("Un Success");
    }
    else {
        resolve("Success");
    }
});

promise
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    })