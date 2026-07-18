// ClosuresA closure is when a function remembers variables from its outer scope
// even after the outer function has finished executing.
// The Core IdeaA closure is when an inner function remembers variables from its outer function
// even after the outer function has finished running.

//---->not use this conecpt in automation testing ,we use async and await

function outer() {

    let message = "hello";
    console.log("Outer called !");

    function inner() {
        console.log(message);

    }

    return inner;
}

let fn_inner = outer();
fn_inner();