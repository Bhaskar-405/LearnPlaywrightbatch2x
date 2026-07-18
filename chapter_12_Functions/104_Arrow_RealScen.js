//if (ourstatuscode  >200 && ourstatuscode<300)

//define a function -normal function
function validateStatusCode(ourstatuscode) {
    if (ourstatuscode >= 200 && ourstatuscode <= 300) {
        console.log("Request is fine");


    }

}
//function as expression
const validateStatusCode_exp = function (status) {
    if (ourstatuscode >= 200 && ourstatuscode <= 300) {
        console.log("Request is fine");


    }
}

//Arrow function
const validateStatusCode_Arrow = (ourstatuscode) => {
    if (ourstatuscode >= 200 && ourstatuscode <= 300) {
        console.log("Request is fine");


    }
}