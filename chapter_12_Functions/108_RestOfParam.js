//Rest of Param
//step1 -define a function
function logResult(suiteName, ...Results) { //dots should be 3
    console.log(suiteName);
    console.log(Results);
    //step2 calling a function


    logResult('LoginTest', 1, 2, 3);
    logResult('Reg Test', "Hello", "Bhaskar");


}