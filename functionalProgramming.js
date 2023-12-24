//idempotence:
//when a function performs the expected output

// Imperatives vs Declarative
//imperative is telling it how to do it
//declarative is telling about the expected output 


//closures 
const closure = function () {
    let count = 0
    return function increaseCount() {
        return console.log(
            count++)

    }
}


//currying
// currying means sharing params between functions instead of giving it to one function 
function carryingMe(a) {
    return function carryingUs(b) {
        return a + b
    }
}

// the above function takes has it params distributed instead of giving it to one function




//Partial Programming 
// this simply means slipping the params into differnt grps 
function a() { }
a.bind()


//caches
//memoization is the termed used for caching teh return value of a function to speed performance 
