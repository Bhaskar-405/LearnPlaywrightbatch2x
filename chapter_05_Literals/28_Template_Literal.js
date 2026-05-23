let firstName = "Bhaskar";
let fullName = `Hi  ${firstName}Rao`;
console.log(fullName);

//Reallife example
const env = "staging";
let testenv = "prod";
const userid = 1234;
const apiurl = `https://api-${testenv}://${userid}`;
console.log(apiurl);
