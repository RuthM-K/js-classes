// strings
//string interpolation - injecting of values into a string
// only works with back ticks

const firstName = 'John'
const lastName = 'Doe'
const fullName = `John ${lastName} of age ${100-76} ${new Date()}`

console.log(fullName)

//string concatenation - joining strings together using (+)
const newFullName = firstName + ' ' + lastName + ' ' + new Date();

console.log(newFullName)