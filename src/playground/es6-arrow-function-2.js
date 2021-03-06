//Arguments object - no longer bound with arrow functions

const add  =  (a, b) => {
    return a +b;
};


console.log(add(55, 1, 1001));
 



//This keyword - no longer bound

const user = {
    name: 'Jon',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived()); 

// Challenge area

const multiplier = {

    numbers: [1, 3, 5],
    multiplyBy: 9,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());