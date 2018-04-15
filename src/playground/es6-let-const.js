var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar:', nameVar);

let nameLet = 'Jen';
nameLet = 'Jon';
console.log('nameLet:', nameLet);

const nameConst = 'Frank';
console.log('nameConst: ', nameConst);

// Block Scoping

var fullName = 'Jonathan Hoskins';
let firstName;

if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
