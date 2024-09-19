//Example:

function* Generator() {
    yield 'First value';
    yield 'Second value';
    yield 'Third value';
}

const gen = Generator();
console.log(gen.next());  //  value: 'First value', done: false 
console.log(gen.next());  // value: 'Second value', done: false 
console.log(gen.next());  //  value: 'Third value', done: false 
console.log(gen.next());  //  value: undefined, done: true  (No more values)


// The first time next() is called, it starts the generator and returns the first yield value.
// Each subsequent next() call moves the generator to the next yield point.
// When there are no more yield values, done becomes true, indicating the generator is finished.

//1.Simple Generator -------------------------------------------------------

function* Gen() {
    yield 1;  // Pause and return 1
    yield 2;  // Pause and return 2
    yield 3;  // Pause and return 3
}

const g = Gen();
console.log(g.next().value); // 1
console.log(g.next().value); // 2
console.log(g.next().value); // 3

// The generator pauses after yield 1, and when you ask for the next value, it moves on to yield 2 and so on.

//2.Async Generator Example ------------------------------------------------

async function* asyncGen() {
    yield new Promise(resolve => setTimeout(() => resolve('Done in 1 second'), 1000));
    yield new Promise(resolve => setTimeout(() => resolve('Done in 2 seconds'), 2000));
}

const ge = asyncGen();
async function getAsyncValues() {
    console.log(await ge.next().value);  // After 1 second: "Done in 1 second"
    console.log(await ge.next().value);  // After 2 seconds: "Done in 2 seconds"
}

getAsyncValues();

//3.Fibonacci Sequence Generator --------------------------------------------

function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();

console.log(fib.next().value);  // 0
console.log(fib.next().value);  // 1
console.log(fib.next().value);  // 1
console.log(fib.next().value);  // 2
console.log(fib.next().value);  // 3
console.log(fib.next().value);  // 5


//4.Custom Message Generator  --------------------------------------------

function* messageGenerator() {
    yield 'Hello!';
    yield 'How are you?';
    yield 'Goodbye!';
}

const msgGen = messageGenerator();

console.log(msgGen.next().value);  // 'Hello!'
console.log(msgGen.next().value);  // 'How are you?'
console.log(msgGen.next().value);  // 'Goodbye!'

//5.Returning Values from an Array ------------------------------------------

function* arrayGenerator(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}

const arrGen = arrayGenerator([10, 20, 30]);

console.log(arrGen.next());  // { value: 10, done: false }
console.log(arrGen.next());  // { value: 20, done: false }
console.log(arrGen.next());  // { value: 30, done: false }
console.log(arrGen.next());  // { value: undefined, done: true }

