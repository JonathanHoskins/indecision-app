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
const fullName = 'Jonathan Hoskins';
let firstName;

const getFirstName = (fullName) => {
    if (fullName) {
        firstName = fullName.split(' ')[0];
        console.log(firstName);
    }
};

getFirstName(fullName);