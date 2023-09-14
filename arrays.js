/**
 * Data structures
 * allowa us to resoresent other forms of data
 * like lists(arrays) andcollections(objects)
 */
const carModel = "BMW"
const carOwner = "John"

//1. Arrays -list of values enclosed with square brackets[]
// Those values can be of any data types

//creating an array
// 1. array constructor
const fruits = new Array('orange', 'apple')

fruits

//2. using square bracket
const scores = [12, 34, 43]

scores

//index - position of an element/value in an array
// the index always starts at 0

//accessing values-use square brackets
console.log(typeof scores[4])

//updating values
let age = 20

age

age = 21

age

scores[0] = 45

//delete values
delete scores[0]

scores

//array methods - allow us to manipulate our arrays
const colors = ['red' , 'green']
//add elements
// 1. push() - add one or more elements at the end of an array
colors.push('blue' , 'violet')

colors

//2. unshift()- adds one or more elements at the beginning of an array
colors.unshift('yellow', 'black')

colors
//remove elements
//.1. pop()- removes the element at the end of an array

const deleted = colors.pop()

deleted

colors

//2. shift()-removes an element at the beginning

colors.shift()

colors

/**
 * 3. slice()- nondestructive (does not mutate the original array)
 * can make a copy of original array
 * delete elements in an array
 */
//using the slice method without anyy arguments will make a copy of the original array
const copyOfColors = colors.slice()

colors

copyOfColors

//spread operator (makes a copy too)
// most common way as compared to using .slice()

const secondCopy = [...colors]
secondCopy.push('crayon', 'white')
secondCopy

//2. Deleting values
const deletedColors = colors.slice(1, 5)

console.log(deletedColors)
//update elements
/**
 * 1. splice()- destructive (mutates the original)
 * delete existing elements
 * add new elements
 * update elements
 */
const days = ['Mon', 'Tue', 'wed', 'thur', 'Fri']

//deleting
const erasedDays = days.splice(1, 4 )

days


