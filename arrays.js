/**
 * Data structures
 * 
 * allows us to represent other forms of data
 * like lists(arrays) and collections(objects)
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
const scores = [12, 34, 43, 56]

scores

//index - position of an element/value in an array
// the index always starts at 0

//accessing values-use square brackets notation
console.log(scores[1])

//Getting array length
console.log(scores.length)

//updating values
let age = 20

age

age = 21

age

scores[0] = 45
scores

//delete values
delete scores[0]
//not using this
scores

//array methods - allow us to manipulate our arrays(add elements, remove and update elements )
const colors = ['red' , 'green']
//add elements
// 1. push() - adds one or more elements at the end of an array
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
//using the slice method without any arguments will make a copy of the original array
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

//1.deleting
const erasedDays = days.splice(4, 1 )

days

erasedDays

const monday = days.splice(0, 1)

monday

days


//2.adding new elememnts (one or more)
//second argument should always be 0
days.splice(0, 0 , 'Mon')

days

days.splice(4, 0, 'Fri', 'Sat', 'Sun')

days

//3. updating values
//second urgument shouls be 1
days.splice(0, 1, 'Monday')
days.splice(1, 1, 'Tuesday')
days

