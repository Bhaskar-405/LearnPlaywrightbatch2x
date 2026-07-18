//this concept borrowed from the python

function retry(testName, maxRetires, delay) {
    console.log(`Retrying ${testName} upto ${maxRetires} times,${delay}`)

}
//calling a function
retry("LoginTest", 3, 100);