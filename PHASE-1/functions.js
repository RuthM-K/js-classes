/**
 * FUNCTIONS
 * Group  statements together and allows us to reuse the said statements
 * 
 * parameters- variables listed in the paranthesis
 * arguments- values passed when calling/invoking the function
 */


//syntax
function functionName(parameters) {

}

//hoisting-able to call a function before it is declared
//sayHello()

function sayHello(name, address, cars) {
    console.log(address)
    console.log(cars)
    console.log(`Greetings ${name} `)
}
//call/invoke the function
sayHello('Ruth Musyoka', {county: 'Nairobi', address: 4500}, ['BMW', 'Audi'])

//return values from function
function sum(numberOne, numberTwo) {
    if(typeof numberOne === 'number' && typeof numberTwo === 'number'){
        return numberOne + numberTwo 
    }
    
    return 'Invalid data type'
}

const firstName = 'Tony'
const results = sum (30, 10)
results


//arrow functions
//syntax
/* //const functionName = (parameters) => {
    (function-body)
} */


const greeting = (name) => `Hi, ${name}`
console.log(greeting('Ruth'))

const sumTwo = (numberOne, numberTwo) => numberOne + numberTwo
console.log(sumTwo(10, 20))

/**
 * CALLBACK FUNCTIONS
 * Functions passed as argumwnts into other functions
 * and might be invoked/called
 * 
 * in JS, functions can be reffered to as first class functions
 * meaning we can treat fuctions like other values
 */
function greetings(myFunc){ 
    console.log('Good evening')

    console.log(myFunc('Tony'))
}
//anonymous function- functions without identifiers/names
greetings(function (name) {
    return `Good evening from ${name}`
})

greetings(() => `Good evening from arrow function`)

//return fuctions as values
function functionA(name) {
    console.log('I am inside function A')

    return function functionB(named) {
        const name = 'new name'
        console.log(`I am in a ${name} function`)
    }
}

//access the function from the return value
const functionB = functionA('returned')

//excecute the fun action by calling/invoking it
functionB('return')