'use strict';

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
        var _this = this;

        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};
console.log(user.printPlacesLived());
