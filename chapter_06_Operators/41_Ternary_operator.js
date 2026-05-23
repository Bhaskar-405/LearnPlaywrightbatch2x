//condition ? true : false;

let Bhaskar_Age = 18;
let Bhaskar_Go_Goa = Bhaskar_Age >= 18 ? "GO" : "Not Go";
console.log(Bhaskar_Go_Goa);
//Realtime example
let Actual_Status_Code = 200;
let Expected_Status_Code = 200;
let Test_Result = Expected_Status_Code >= Actual_Status_Code ? "? Pass" : "Fail";
console.log(Test_Result);

//example2
let enivronment = "stage";
let base_Url = enivronment == "prod" ? "https://api.example.com" : "https://staging-api.example.com"
console.log(base_Url);

//example 3

let isCI = true;
let browseMode = isCI ? "headless" : "headed";
console.log("launching browser in:", browseMode);

//exercise 4

let responsetime = 850;
let sla = 1000;
let slaStatus = responsetime < sla ? "Good service" : "service Breached";
console.log(`resonsetime:${responsetime}ms - ${slaStatus}`);

//Nested Ternary means multiple conditions
let Bhaskar_age = 26;
let Bhaskar_GOA_drink = Bhaskar_age > 25 ? (Bhaskar_age >= 26 ? "Drink" : " don't drink") : "will not go Goa";
console.log(Bhaskar_GOA_drink);

let temp = 35;
let feel = temp >= 40 ? "very hot" :
    temp >= 35 ? "warm" :
        temp >= 20 ? "min" :
            temp >= 19 ? "very cool" : "cool";
console.log(feel);



