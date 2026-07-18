//step1;Define a function
function makeRetryTracker(max) {
    let attempts = 0;

    function tryagain(testName) {
        attempts++;
        if (attempts > max) {

            return "Exceed the attempts";

        }
        return tryagain;

    }

    let retry = makeRetryTracker(3);
    console.log(retry("Login"));
    console.log(retry("Login"));
    console.log(retry("Login"));


}