//Pure Function
//it always returns the same output for smae input and has no side affects
// ✅ Pure - no side effects, predictable output
function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2);
}

console.log(calculatePassRate(10, 7));
console.log(calculatePassRate(10, 7));

// ❌ Impure - depends on external state

function isPassing(score) {
    return score >= threshold; // depends on external variable
}

let threshold = 70;
console.log(isPassing(threshold));

threshold = 50;
console.log(isPassing(threshold));
