//FUNCTIONS-piece of code that allows reusability by calling out function
//can accept 1 0r more parameters separated by commas

//syntax
function functionName() {
    //function logic/code
}

console.log("Good morning Ruth, have a nice day")
console.log("Good morning Ruth, have a nice day")
console.log("Good morning Ruth, have a nice day")

//parameters- placeholde/variables defined in the function parantheses
//arguments- values passed into a function

function greetings(name, time) {
    //local scope
    console.log(`Good morning ${name}, have a nice day ${time}`)
}

//calling/invoking the function
greetings("Ruth", "day")
greetings("Ann", "week")
greetings("Musyoka", "month")

function sum(a, b) {
    //console.log(a + b)-not a must to do this
    //our logic
    return a + b //return keyword stops excecution of a function

}

console.log(sum(23, 45))
console.log(sum(15, 60))

 