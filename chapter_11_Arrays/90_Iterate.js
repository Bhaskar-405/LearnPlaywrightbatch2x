let tests = ["Login", "Checkout", "Search"];

//iterate using simple for loop most prefered
for (let i = 0; i < tests.length; i++) {
    const element = tests[i];
    console.log(element);


}
console.log("-----2nd way for -of")
//for...of (cleanest for value)

for (test of tests) {
    console.log(test);

}

console.log("-----3nd way foreach -2nd most prefresed loop")

tests.forEach((test, index) => {
    console.log(test, index);

});

console.log("-----4th way forin")

let students = ["Bhaskar", "Anu", "Babu"]
for (stdnt in students) {
    console.log(stdnt, "-->", students[stdnt]);
}

console.log("-----5th way forof entries  ,never used")

for (let [i, test] of tests.entries()) {
    console.log(i, tests);

}
