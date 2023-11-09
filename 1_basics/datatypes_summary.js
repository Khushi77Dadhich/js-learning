//primitive

//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt(jab bahut badi value ho)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId); //same nhi hoga kyo ki symbol datatype m asa hi hota h

//const bigNumber = 46813279465413467n



//reference (non-primitive)

//Array, Objects, functions

const heros = ["krishna", "ram", "hanuman"];
let myObj = {
    name: "khushi",
    age: 21,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof bigNumber); //undefined datatype
console.log(typeof outsideTemp); //object datatype
console.log(typeof scoreValue); // number datatype
console.log(typeof myFunction); //function/object function datatype
console.log(typeof heros); //object function
console.log(typeof anotherId); //symbol datatype