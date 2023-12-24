// //constructor functions 
// function Elf(name, weapon) {
//     this.name = name
// }

//to add props to the constructor function use the this keyword
// to create from the constructor function use the new keyword 


//class creation
// to add properties to a constructor functions use the this keyword

class Elf {
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }
    eat() {
        return this.name + ' eats with ' + this.weapon
    }
}

//calling an instance of a class 
const sofoba = new Elf('anstiwaaa', 'guns')


console.log(sofoba.eat())


// the new keyword in Javascript allows us to do binding to the this keyword 
//refresh of last times course 

//explicit use of the this keyword 

const person3 = {
    name: 'kwmae',
    age: 500,

    //this binds the this keyword in the function to the window object 
    hi: function () {
        console.log('hi', + this.setTimeout)
    }.bind(window)
}

//arrow functions 
//arrow functions make the this keyword blocked scoped 



// the EXtends keyword 
// the super class helps you inherit the props from the parent class  
class Dogs extends Elf {
    constructor(name, weapon, type) {
        super(name, weapon)
        this.type = type
    }
    run() {
        return console.log(this.name + ' plays with ' + this.weapon + " and usese" + this.type)
    }
}

const poppy = new Dogs('mafia', 'banku', 'Big one ')
poppy.run()