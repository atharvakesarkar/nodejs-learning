// 1.declare a array named 'teaflavors' that contains the strings "green tea " ,"black tea"  and "oolong tea"--- access the first element of the array and store in the variable name firsttea

let teaFlavors = ["green tea" , "black tea", "oolong tea"];

// let teaFla = Array("green tea" , "black tea", "oolong tea"); //different way to declare array

// indexing - the address of the array elements starting from 0 
let firstTea = teaFlavors[0];

// console.log(firstTea);


// 2. declare an array name 'cities' containing "london" , "tokyo" ,"paris" , and "new york". access the third element in the array and store it in variable name as favioratecity 

let cities = ["london", "tokyo", "paris", "new york"];

let favioratecity = cities[2];
// console.log(favioratecity); 

// you have an array named "teatypes" containing "herbal tea " , "white tea" and "masala chai" change the second element of the array to "jasmine tea"

let teaTypes = ["herbal tea", "white tea", "masala tea"];
// console.log("before changing the array" ,  teaTypes);

teaTypes[1] = "jasmine tea";
// console.log("after changing the array" ,  teaTypes);


// declare an array named 'citiesvisited' containing "mumbai" and "sydeny". add "Berlin" to the array using push method

let citiesVisited = ["mumbai" , "sydney"];
// console.log("cities before adding berlin using push method" ,citiesVisited)

citiesVisited.push("berlin");
// console.log("cities after adding berlin using push method" ,citiesVisited);


// you have an array named as "teaOrders" with "chai" , "ice tea" , "matcha" , "earl grey";...remove the last item of the array using the pop  method and store it in variable name as last order

let teaOrders = ["chai" , "ice tea" , "matcha" , "earl grey"];
// console.log("before removing last element using pop method " , teaOrders);

let lastOrder = teaOrders.pop(3);
// console.log("last element store in variable name as lastOrder ", lastOrder);

// console.log("before removing last element using pop method " , teaOrders);


// you have an array name as "popularitems" containing "green tea" ,"oolong tea" and "chai".....create a softcopy of this array named as 'softcopyTeas'

let popularItems = ["green tea" , "oolong tea" , "chai"];
// console.log("print popularitem ", popularItems);

let softCopyItems = popularItems;
// console.log("print softCopyItems ", softCopyItems);


// you have an array name as 'topcities' containing "belin" ,"singapore" , "new york"...created  a hard copy of this array named as 'hardcopycities';

let topCities = ["berlin" , "singapore" , "new york"];
const hardcopycities = [...topCities]; //this three dot will make a hard copy so that it wont be change after making any change in fist array
topCities.pop();

// console.log(hardcopycities);
// console.log(topCities);


// you have two arrays 'europeCities' contiaing "paris" , "Rome" and 'asianCitites' containing "Tokyo" ,"Bangkok"...........merge this two array into new array name as 'worldCities'

let europeCities = ["paris" , "Rome"];
let asianCities = ["Tokyo" , "Bangkok"];

let worldCities = europeCities.concat(asianCities); //concat is use to merge two arrays

// console.log("cities in europeCities array ",europeCities);
// console.log("cities in asianCities array ", asianCities);
// console.log("cities in worldCities array ", worldCities);


// you have an array named as 'teaMenu' containing "masla chat" , "oolong tea" , "green tea", and "earl grey"........find the length of the array and store it in  a variable name menuLength

let teaMenu = ["masla chat" , "oolong tea" , "green tea" , "earl grey"];
let menuLength = teaMenu.length;

console.log(menuLength);


// you have an array named 'cityBuketList' containing "kyoto" , "london" , "capeTown" and "vanCover"....check if "london" is in the array and store the result in the variable named "islondonList"

let cityBuketList = ["kyoto" , "london", "capeTown", "vanCover"];
console.log(cityBuketList.includes("london"));