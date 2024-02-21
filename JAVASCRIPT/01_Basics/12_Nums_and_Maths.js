/*
what is the difference between "const score = 400" and "const score = new Number(400)" definitions in JS

ChatGPT
In JavaScript, there is a difference between const score = 400; and const score = new Number(400);.

const score = 400;: This defines a constant variable named score and assigns it the primitive value 400. In this case, score is a primitive type of number.

const score = new Number(400);: This also defines a constant variable named score, but it assigns it an instance of the Number object. In this case, score is an object of type Number, rather than a primitive number.

Here's a breakdown:

In the first case (const score = 400;), score is a primitive value. You can perform operations directly on it, like arithmetic operations, comparisons, etc., without needing to worry about it being an object.

In the second case (const score = new Number(400);), score is an instance of the Number object. While you can still perform operations on it, you may need to use methods provided by the Number object to do so. For example, to convert it to a primitive number, you'd use score.valueOf().

Here's a quick example to illustrate:

javascript
Copy code
const score1 = 400; // Primitive number
const score2 = new Number(400); // Number object

console.log(typeof score1); // Output: number
console.log(typeof score2); // Output: object

console.log(score1 + 100); // Output: 500
console.log(score2 + 100); // Output: 500 (automatically converts to primitive)

console.log(score1.valueOf()); // Output: 400 (no need to convert)
console.log(score2.valueOf()); // Output: 400 (explicitly convert to primitive)


In general, it's recommended to use primitive types (const score = 400;) unless you specifically need the additional features provided by objects. Using primitive types is more efficient in terms of memory usage and performance
*/ 




const score = 400
console.log(score)
console.log(typeof score)
const balance = new Number(100)  // Similar to String, this type of declaration also has some special properties(methods) related to "Numbers". You can see them listed in browser console.
console.log(balance)

console.log(balance.toString())   //Converts Number to string, now all string methods are applicable on it
console.log(balance.toString().length)   
console.log(typeof balance)
console.log(balance)              // Note that, "balance.toSring()" didnt change the type of original object "balance"

// Similarly other methods/prperties of Number object
console.log(balance.toFixed(2))
const otherNumber = 1123.8966
console.log(otherNumber.toPrecision(4))
console.log(otherNumber.toPrecision(5))
console.log(otherNumber.toPrecision(2))
console.log(otherNumber.toPrecision(3))

/* 
The reason your code runs without any error is because JavaScript allows you to access certain methods and properties of primitive values as if they were objects. This behavior is known as "autoboxing" or "implicit object coercion".

When you call a method or property on a primitive value, JavaScript automatically converts that primitive value to its corresponding object wrapper (like Number, String, Boolean) behind the scenes, allowing you to use the method or property. After the operation is completed, the temporary object is discarded.

otherNumber is a primitive value of type number, not an instance of the Number object. However, when you call toPrecision() on otherNumber, JavaScript automatically converts otherNumber to a Number object behind the scenes, allowing you to use the toPrecision() method. This process is transparent to you as a developer

So, in essence, even though otherNumber is a primitive value, JavaScript temporarily converts it to a Number object to perform the method call, and then reverts it back to a primitive value after the operation is completed. This behavior is part of JavaScript's design to make working with primitive values more convenient.
*/

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

// ********************************************** Maths ************************************************** //
console.log(" ")
console.log(" ")
console.log(" ")
console.log("Maths In JS (library)")
console.log(Math)  //Object [Math] {}  ->  Math ek object hai with {} (i.e. many properties)
console.log(Math.abs(-4))
console.log(Math.round(4.4))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.8))
console.log(Math.min(4.8, 9 ,10, 2.25))
console.log(Math.max(4.8, 9 ,10, 2.25))

console.log(Math.random())      //Always outputs value betn 0 and 1
console.log((Math.random()*10) + 1)      //Always outputs value betn 1 and 10
console.log(Math.floor((Math.random()*10) + 1))      //Always outputs integer value from 1 to 10

const min = 10
const max = 20
console.log( Math.floor( (Math.random()) * (max - min + 1) ) + min )   // Always outputs integer value from min to max
