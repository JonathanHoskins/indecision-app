'use strict';

var _util = require('util');

//Arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    return a + b;
};

console.log(add(55, 1, 1001));

//This keyword - no longer bound

var user = {
    name: 'Jon',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);
    }
};

user.printPlacesLived();
