//scope in Functions
let env = "staging";  //Global scope

//step1:define a function
function setupConfig() {
    let timeout = 3000;  //local scope
    console.log(env);//can access global
    console.log(timeout); //can access local

}
//step2: calling function
setupConfig();
console.log(env);
console.log(timeout);