console.log(score); // ReferenceError: score is not defined

let score = 100;

// Note: let is block-scoped, so score is not hoisted to the top of the block,

{
    let score = 100;

    console.log(score); // ReferenceError: score is not defined 
}