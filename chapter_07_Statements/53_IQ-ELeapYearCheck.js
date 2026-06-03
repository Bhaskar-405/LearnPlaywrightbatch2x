let Year = 2024;
if (Year % 4 === 0 && Year % 100 !== 0 || Year % 400 === 0) {
    console.log("Given Year is Leap");

}
else {
    console.log("Given Year is Not Leap Year");
}