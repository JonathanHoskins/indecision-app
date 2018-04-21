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
        const cityMessages = this.cities.map((city) =>{
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};
console.log(user.printPlacesLived());