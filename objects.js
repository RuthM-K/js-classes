/**
 * Objects- collection of data consisting of key value pairs(properties)
  * separated by comma
  * 
  * opened with curly brackets {}
 */

//syntax
const car = {
    color: 'white',
    model: 'Audi',
    //nesting
    owner: {
        fullName: 'John Doe',
        address: 'Kinoo'
    },
    previousOwners: ['Jane', 'Ironman'],
    yearOfManufacture: 2015
}

//accessing values
//1. dot notation(.)
console.log(car.previousOwners[1])

//2. square bracket notation ([])
console.log(car['model'])

//accessing properties
car.numberPlate = 'KCZ'

car

//updating
car.model = 'BMW'

car

//deleting
delete car.numberPlate

car

//object methods
//1. object.keys()- returns an array of object keys
console.log(Object.keys(car))

//2.object.values()-returns an array of object values
console.log(Object.values(car))

//make object copy using spread operator(...)
const carCopy = {...car}
carCopy
