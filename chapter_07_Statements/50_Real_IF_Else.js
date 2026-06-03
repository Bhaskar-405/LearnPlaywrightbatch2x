
//https://app.vwo.com/#/login  
//3 roles- editor,viewer,Admin

let isLogged_in = true;
let user_role = "editor";

if (isLogged_in) {

    if (user_role === "admin") {
        console.log("Admin can do all things");
    }
    else if (user_role === "editor") {
        console.log("editor can do all things");
    }
    else if (user_role === "viewer") {
        console.log("viewer can do all things");
    }
    else {
        console.log("No idea which role user has");
    }
}
else {
    console.log("user not logged in");
}