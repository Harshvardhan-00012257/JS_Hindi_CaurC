// All data-types categorized into two main types only :                1. PRIMITIVE (call by value type)                       2. NON-PRIMITIVE (or Reference type)


// PRIMITVE : String, Number, Boolean, null , undefined, Symbol, BigInt
// (7-types)

// JS statically typed hai , ya dynamically typed? (Wht abt Typescript?)

console.log(typeof undefined)     
console.log(typeof null)                // undefined is a type
                                        // null is an object

const id1 = Symbol('123')
const id2 = Symbol('123')
console.log (id1 == id2)
console.log (id1 === id2)

const bigNumber = 2413545456435435445346n


// Reference type (NON-PRIMITIVE type)
// Arrays, Objects, Functions

const heroes = ["shaktimaan", "naagraj", "doga"]
const MyObj = {
    name : "Harsh",
    age : 22
}
const MyFunction = function () {
    console.log ("Hello World...!!!")
}

console.log(typeof heroes)
console.log(typeof MyObj)
console.log(typeof MyFunction)  // its typeof is function, but infact it is a function-object

// NOTE : Return type of all NON-PRIMITIVE data type is objects

/* Return types of variables in JS

PRIMITIVE DATATYPE                     NON-PRIMITIVE DATATYPE
Number  =>  number                      Arrays      =>      Object
String  =>  string                      Function    =>      function(Object)
Boolean =>  boolean                     Object      =>      Object
null    =>  object
undefined => undefined
Symbol  =>  symbol
BigInt  =>  bigint

*/

