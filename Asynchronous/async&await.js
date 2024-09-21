//Example
async function fetchData() {
    console.log('Fetching data...');

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data fetched!'), 3000);
    });

    let result = await promise;  // Waits for 3 seconds
    console.log(result);
}

console.log('Task 1 started');
fetchData();
console.log('Task 2 started');