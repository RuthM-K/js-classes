/**
 * Data types
 * strings, numbers, null, undefines
 * objects, arrays, Booleans
 */

/* //Arrays- list of values enclosed with a square brackets
//separated with commas
// its values can be accessed through the index
 */

//an array example
const students = ['Caro', 'Adan', 'Ruth'];

//a variable with a list as a string
// limits one to access individual value and work on it
const totalStudents = 'Festus, james, ian, brenda';

console.log(totalStudents)
console.log(students)

/**
 * CRUD operations
 * Create
 * Read
 * Update
 * Delete
 */

//1.Create
const letters = ['a', 'b', 'c', 'd', 'e'];
const items = ['books', 'money', 24, true];

const ages = [18, 21, 54, 78, 25, 30, 19, 23];

//2. Read
/**
 * syntax
 * nameOfArray[index]
 */
letters[1]
console.log(letters[3])

//to get the last element,
//first get the lenght of the array
// then minus 1 to get the index of last element
console.log(ages.length -1)
//then put all that in square brackets enclosed by variable name.
console.log(ages[ages.length -1])

//if you put index number not available..you get undifined
console.log(items[4])

/**
 * 3. update
 * add an element to an array 
 * array methods- used to add or remove an element in an array
 * push, unshift, pop, shift,
 * destructive ones- change the original array e.g push method
 * non-destrructive- dont change the origina e.g slice()
 */
console.log(items)
//push-adds at the end
items.push('Laptop')
items.push('Rubber', '78')
console.log(items)

//unshift- adds element at the start
items.unshift('food')
console.log(items)

//slice- 1. creates a copy 2. get elements within a specific range
//1. creates a copy
console.log(items)
items.slice()
console.log(items.slice())
//2. get elements within a specific range
console.log(items.slice(-1))
console.log(items.slice(-2))
console.log(items.slice(1))
//slice with 2 arguments
console.log(items)
console.log(items.slice(1, 4))//the last element of index 4 is not returned
