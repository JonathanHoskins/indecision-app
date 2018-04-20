import { print } from "util";
  
//Arguments object - no longer bound with arrow functions

const add  =  (a, b) => {
    return a +b;
};


console.log(add(55, 1, 1001));




//This keyword - no longer bound

const user = {
    name: 'Jon',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
    }
};

user.printPlacesLived();