const BASE_URL = "https://app.thetestingacademy.com";
// const BASE_URL = "https://app.thetestingacademy.com";
//BASE_URL = "https:/ / staging.thetestingacademy.com";
// TypeError: Assignment to constant variable.
//const is block scoped

let name = "pending";
name = "done";
//this is block
{
    let name = "Dutta";
}
//this is function
function say() {
    let name = "Dutta";
}
say();
say();