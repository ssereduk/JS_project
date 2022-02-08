"use strict";

if (4==9) {
    console.log()
} else {
    console.log('Error');
}

const num = 50;

if(num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ок!');
}

(num === 50) ? console.log('Ок!') : console.log('Error');