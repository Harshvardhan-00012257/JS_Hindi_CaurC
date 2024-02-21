"use strict";   // treat all code in the file as per newer version of JS 

// alert (3+3)  // will give error because we are using nodejs, not the browser

console.log (3 
    +
      3)           //This is valid but not preferred
                   // Always remeber whenevr you write code, it should be well readable
console.log ("Viral Bhayani")

// JS documentation : mdn (unofficial but organized)
//                    ecmascript (official doc tc39.es)  


// Primitive Datatypes
/* 
number (kuch toh range hai iski (google krr))
bigint
string
boolean
symbol  (uniqueness)
null (standalone value infact) 
undefined (variable declare krr diya hai, lekin abhi tk value nhi di hai, hence undefined
           whereas null is the representation of empty value (mtlab value hai)
           This is the difference betn undefined and null)
           For ex. let state = null
                   let state;

*/


// Objects

let name = "Hitesh"
let age = 23
let variable
let variable2 = null

console.log(typeof "")
console.log(typeof age)
console.log(typeof variable)
console.log(typeof undefined)   
console.log(typeof variable2)
console.log(typeof null)
console.log(typeof 23)

// Notice kariye ki "typeof undefined"  is undefined itself kyuki wo ek prakar ka type hi hai JS mei
// Whereas "typeof null" is object iske baare mei dekhenge course krte krte
