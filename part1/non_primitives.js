// this code consist of learn of non-primitives datatype

// object - the object is collection of key value pairs 

let user_information = {
    firstname : "Atharva",
    lastname : "kesarkar",
    contact_no : 9820919318
}

// console.log(user_information);
// console.log(typeof(user_information));

// specfic key value from object
// console.log(user_information.firstname);

// if the key value pair is in double quote , then how it can be access
let user = {
    "first name" : "divya",
    lastname : "gharwal",
    contact_no : 9594939291
}

// console.log(user["first name"]);

// ________________________________________________________________________________________________________

// array - it is collection of multiple data types

let heroes = ["superhero" , "captain america" , "spiderman" , "hulk" , 10];
// console.log(heroes);
// console.log(heroes[0]);
// console.log();


let mul_arr = [10 , "atharva" , true];
// console.log(mul_arr);

// ______________________________________________________________________________________________________________

// type conversion - it is basically used to change the data type of the variable

// let name = 20;
// let result = String(name);
// console.log(typeof(result));

let name = "Atharva kesarakar";
let result = Number(name);
console.log(result);