 /**
  * Data types
  * 
  * numbers, strings, boolean,objects,arrays,null,undefined
  * 
  * symbols
  */

 // use typeof operator, to know the datatype

 //1.Numbers

 console.log(typeof 34)

 //2.strings

 console.log(typeof "John Doe") //double quotes
 console.log(typeof 'John Doe') //single quote
 console.log(typeof `John Doe`) //backticks

 //3. Boolean
 console.log(typeof true)

 /**
  * 4. Objects- collection of data consisting of key value pairs
  * separated by comma
  * 
  * opened with curly brackets {}
  */
const student = {
    firstName: 'John',
    lastName: 'Doe',
    cohort: 'SDF-FT-06',
    class: 'Bravo'

}

console.log(typeof student)

//5. Arrays- list of values enclosed with square brackets[]
const students = ['Adan' ,'Anthony','Ruth']
console.log(typeof students)

//6.null- reps an intentionally absent object
console.log(null)

//7. undefined-not yet assigned
