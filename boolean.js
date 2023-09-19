/**
 * Boolean expressions
 * 
 * anthing that evaluates to true or false
 */

console.log(Boolean(0))

//comparison operators

/**
 * strict equality operator
 * 
 * comapares values and data types
 */

console.log(23 === 23)
console.log(23 === '23')

/**
 * strict inequality operator 
 * checks if the values are not equal and data types
 */
console.log(23 !== 24)
console.log(23 !== '23')

/**
 * loose equality (==) & inequality(!=) operator
 * comapres values only
 */
console.log(23 == '23')
console.log(23 != '23)')

//Number operators
console.log(34 > 89)
console.log(23 < 34)
console.log(23 >= 25)

//Lodical operators

// 1. NOT/bang (!) - returns the opposite
console.log(!false)
console.log(!'true')

//double bang (!!)
console.log(!!'')

//AND operator (&&)
console.log(23 > 56 && "sth")

//OR (||) double pipe operator
console.log(23 > 6 || "sth")

//ternary operator

const age = 25

const canVote = age > 18 ? "Can Vote" : "Cannot Vote"

console.log(canVote)