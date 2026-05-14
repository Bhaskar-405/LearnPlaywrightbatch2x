var a = 10;//global scope  ----

//var is function scoped
console.log(a); //10
//function begins
function printHello() {
    console.log("Hi testing beginner");
    var a = 20;//local scope-----
    console.log(a); //20
    if (true) {
        var a = 30;   //    -------
        console.log(a); // 30
    }
}
//function ends
printHello();
var a = 50;
console.log(a); //50

//var is flipper/ not trust worthy /dual face