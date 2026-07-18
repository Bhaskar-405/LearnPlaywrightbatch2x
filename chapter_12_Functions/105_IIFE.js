//Immediately Invoked Function  Expression(IIFE)
//they don't need to be called

//normal function
function name1() {
    console.log("Hi");


}
//IIFE-rap above function into () and add ()  and remove function name
//this can be used when we don't want to share the function
(function () {
    console.log("Hi");


})();

//palywright example
(function () {
    //playwright to run the test

})();