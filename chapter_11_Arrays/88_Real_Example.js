//step 1 taking multiple browsers
let Browsers = ["Chrome", "firefox", "Safari", "Opera", "Edge"];
//caluculate browsers
let browser_count = Browsers.length;
console.log(Browsers);
console.log(browser_count);
//remove last element
Browsers.pop();
console.log(Browsers);
console.log(browser_count);
//remove 1st element
let removed = Browsers.shift();
console.log(Browsers);

//iterate array(Browsers)

for (let i = 0; i < Browsers.length; i++) {

    console.log(Browsers[i]);
    if (Browsers[i] === "Opera") {

        console.log("Opera is removed from the selenium");

    }

}





