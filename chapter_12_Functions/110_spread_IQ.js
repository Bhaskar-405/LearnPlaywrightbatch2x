function add(a, b, c) {
    return a + b + c;

}
let num = [1, 2, 3];
add(...num);
console.log(add(...num));

let responsecodes = [200, 400, 500];

function hasError(...codes) {
    return codes.some(c => c >= 400);

}
hasError(...responsecodes);
console.log(hasError(...responsecodes));

