"use strict";

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 8; i++) {
//     if (i===6) {
//         // break;
//         continue;
//     }
    
//     console.log(i);
//    }

let num = 20;

function showFirstMessage(text) {
    console.log(text);
   let num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(15, 26));

function ret() {
    let num = 50;

    //

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello');
};

logger();

const calc = (a, b) => {
    console.log('1');
    return a + b
}; 


const str = "test";
const arr = [1, 2, 7];

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());


const fruit = "some fruit";

console.log(fruit.indexOf("fruit"));
    
}

const logg = "Hello World";

// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num =12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
