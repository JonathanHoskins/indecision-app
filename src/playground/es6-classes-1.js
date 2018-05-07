class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
      }

    getDescription(){
        return `Hi. ${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

//Traveler -> Person

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasHomeLocation())
        {
            description += ` Their location is ${this.homeLocation}`;
        }

        return description;
    }
}

//Add support for homeLocation
//Override getGreeting
//1. Hi. I am Jon Hoskins. I'm visiting from Chattanooga
//2. Hi. I am Jon Hoskins

const me = new Traveler('Jon Hoskins', 30, 'Chattanooga');
console.log(me.getDescription());

const other = new Traveler();
console.log(other.getDescription());