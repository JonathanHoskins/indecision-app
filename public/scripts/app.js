'use strict';

// const square = function (x){
//     return x * x;
// }

// const squareArrow = (x) => {
//     return x * x;
// };

//const squareArrow = (x) => x * x;

//console.log(squareArrow(9));

//Challenge - Use arrow functions
//getFirstName
var fullName = 'Jonathan Hoskins';
var firstName = void 0;

var getFirstName = function getFirstName(fullName) {
    if (fullName) {
        firstName = fullName.split(' ')[0];
        console.log(firstName);
    }
};

getFirstName(fullName);
