// write a while loop that caluclates the sum of all numbers from 1 to 5 and stores the result in a variable name sum

// let sum = 0;
// let i = 1;

// while(i <= 5){
//     sum += 1    //sum =  sum + i
//     console.log(sum);
//     i++
// }
// console.log(sum);


// write a while loop that counts down from 5 to 1 and stores the numbers in array name countdown

// let i = 5;
// let  countDown = [];
// while(i >= 1){
//     countDown.push(i);
//     i--
// }

// console.log(countDown);


// write a do while loop that prompts a user to enter their favorite tea type until they enter "stop"....store each tea type in array name 'teacollection'

let teaCollection = [];
let tea;

do {
    tea = prompt(`enter your favorite tea name. type stop`);

    if (tea !== "stop"){
        teaCollection.push(tea);
    }
    
} while (tea === "stop");
console.log(teaCollection);