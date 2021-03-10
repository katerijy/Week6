// //==========Exercise #1 ===========//
// /*
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:
// */

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(person3.pizza[0]);
console.log(person3.pizza[1]);
console.log(person3.tacos[0]);
console.log(person3.burgers[0]);
console.log(person3.ice_cream[0]);
console.log(person3.ice_cream[1]);
console.log(person3.ice_cream[2]);
console.log(person3.shakes[0]);
console.log(person3.shakes[1]);
console.log(person3.shakes[2]);
console.log(person3.shakes[3]);
console.log(person3.shakes[4]);

// //=======Exercise #2=========//
// Write an object prototype for a Person that has a name and age, has a
// printInfo method, and also has a method that 
// increments the persons age by 1 each time the method is called.


// // Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.printInfo = function (name, age++) {
        return `${this.name} is ${this.age} years young`
    };
}

// Create two people using the 'new' keyword, and print
// both of their infos and increment one persons
// age by 3 years. Use an arrow function for both methods
// */

let new_person = new Person('Kath', 45);
this.printInfo = () => {
    return `{this.name} is {this.age} young`
};
console.log(new_person.printInfo())


// // Create another arrow function for the addAge method that takes a single parameter
function AddAge(age) {
    this.Addage = (age+=3)
};
let new_person = new Person('Kath', 45);
this.printInfo = () => {
    console.log(new_person.AddAge)
}
 
// // =============Exercise #3 ============//
// /*

//     Create a Promised based function that will check a string to determine if it's length is greater than 10.
//     If the length is greater than ten console log "Big word". 
//     If the length of the string is less than 10 console log "Small Number"
// */
const tens = (num) => {
    return new Promise((resolve, reject)) => {
    if (num > 10) {
        resolve(true);
        return "Big World"
    } else if {
        num< 10 {
        resolve(true);
        return "Small Number"
        }
        reject(false)

    }
    }
    }
console.log(tens(5))

