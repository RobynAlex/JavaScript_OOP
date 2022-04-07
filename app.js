console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, numPets, residence, hobbies) {
        this.name = name;
        this.numPets = numPets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    info() {
        console.log(
            `${this.residence} native ${this.name} has ${this.numPets} pets and enjoys ${this.hobbies}.`
        );
    }

    greet(name = "Violet") {
        console.log(`Hello ${name}! Nice seeing you again.`)
    }
}


class Coder extends Person {
    constructor(name, numPets, residence, hobbies, occupation) {
        super(name, numPets, residence, hobbies);

        this.occupation = occupation;
    }

    greet(name = "DogeCoinPrincesa") {
        console.log(`Hello ${name}! Did you miss us?`);
    }
}


const robyn = new Person("Robyn", 0, "Omaha", ["coding",  "rockclimbing",  "puzzles"]);
const dogecoin = new Coder("DogeCoinPrincesa", 2, "Seattle", ["coding",  "tweeting",  "reading"], "Tech Salesman");

robyn.info();
dogecoin.info();

robyn.greet(dogecoin.name);
dogecoin.greet(robyn.name);