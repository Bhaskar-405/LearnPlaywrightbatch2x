//step1;define a function
function makeCounter(start = 0) {

    let count = start;
    return {
        increment() { count++ }, //function
        decrement() { count-- },//function
        get() { return count; }
    }

}
let counter = makeCounter(0);

counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());

