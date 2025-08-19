//string data type

let str = "This is string data type"

// console.log(typeof str)
// console.log(str)


// number data type

let num = 4.5657654675464;


// console.log(typeof num)

// boolean data type

let bool = false;
let bool2 = true;

console.log(typeof bool)
console.log(typeof bool2)


//undefine

let x

console.log(x)


// null 


let age = null

console.log(typeof age)
console.log(age)

age = 34;

console.log(age)


// Object, array

// object

const person = {
    firstName:"Umesh",
    lastName:"Mehta",
    age: 23,
    height: "5 foot",
    weight: 65
}

console.log(person.firstName)
// console.log(person.age)
// console.log(person.weight)

person.firstName="Rakesh"

console.log(person.firstName)

// person.age= 25

// console.log(person.age)


// Arrray datatype

let arr1 = [3, 5, 9, 0, 2, 4]
          
arr1[3]=10
arr1[1]= 50
console.log(arr1[3])
console.log(arr1[1])


const mixArr = ["hello", 23, true, null]


mixArr[0]="bye"
mixArr[2]=false;

console.log(mixArr)