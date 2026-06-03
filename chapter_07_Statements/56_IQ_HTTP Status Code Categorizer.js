/* 200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid*/
let status_code = 203;
if (status_code >= 200 && status_code <= 299) {
    console.log("Success");
}
else if (status_code >= 300 && status_code <= 399) {
    console.log("Redirection");

}
else if (status_code >= 400 && status_code <= 499) {
    console.log("Redirection");

}
else if (status_code >= 500 && status_code <= 599) {
    console.log("Redirection");

}

else {
    console.log("Invalid");
}
