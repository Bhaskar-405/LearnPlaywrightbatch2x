//Higher Order functions
//A function takes a function as argument or return a function

function runWithLogin(testFn, testName) {
    console.log(`Starting:${testName}`);

    let Result = testFn();
    console.log(`Finished: ${testName} ->${Result}`);

    return Result;

}

function LoginTest() {
    return "pass";

}
function LoginTestFailed() {
    return "Fail";

}

runWithLogin(LoginTest, "Login Test");