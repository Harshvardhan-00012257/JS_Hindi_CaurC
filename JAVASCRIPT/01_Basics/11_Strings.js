// Strings can be denoted as : 1.Single quote('')   2. Double quote ("")

const name = "Hitesh"
const repoCount = 50

// console.log (name + repoCount + "Value")      Dont use this syntax, use the one with backticks shown below

console.log (`Hello my name is ${name} and my repo count is ${repoCount}`)

// Another way to declare and initialize strings
const gameName = new String ('hitesh-hc')   //The advantage of using this way to initialize strings gives us immense control over the manipulation of our strings. as it has many inbuild
                                           // properties and prototype methods useful in manipulating strings.
                                           // Moreover the string is stored in "key : value" format (as an Object)
                                           // You can verify all this via JS console inside the browser
                                           // Mastering all these properties and methods is the way to learn strings in JS
console.log (gameName[0])
console.log (gameName.__proto__)

console.log (gameName.length)
console.log (gameName.toUpperCase())
console.log (gameName)  //Notice that original string still remains the same, only its copy is converted to UpperCase (Recall concept of STACK, HEAP mem.)
console.log (gameName.charAt(2))
console.log (gameName.indexOf('t'))

const anotherString = gameName.substring(0 , 5)  // =>  hites 
// const anotherString = gameName.substring(0, )    =>  hitesh-hc
console.log (anotherString)


// const anotherString2 = gameName.slice(-8,5)      =>  ites                                           //Examples of negative indexing in JS
// const anotherString2 = gameName.slice(0,5)       =>  hites                                          //Can substring() method use negative indexing?
// const anotherString2 = gameName.slice(-1, -3)    =>  (Nothing printed)
// const anotherString2 = gameName.slice(-3, 1)     =>  -h
const anotherString2 = gameName.slice(-3, )      // =>  -hc
console.log (anotherString2)


const anotherString3 = "     hitesh choudhary    "
console.log(anotherString3)
console.log(anotherString3.trim())     // NOTICE which section of the string was trimmed?
                                       // Understand the working of trim(), trimStart(), trimEnd() through documentation (@mdn webdoc)

const url = "https://hitesh.com/hitesh%20choudhary"
console.log (url.replace('%20', '-'))
console.log (url.includes('choudhary'))
console.log (url.includes('modi'))

/* 
There are many more methods for strings, all of which are very important
Know and learn about them with help of browser console, mdn webdocs
Take an overview once in a while and go in detail whenever needed.
*/
