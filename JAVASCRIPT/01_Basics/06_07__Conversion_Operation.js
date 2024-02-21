// JS mei conversions from one type to another kro jara sambhaal k.....
let myvar = "33abc"    /* Check same for    let myvar = "33"
                                            let myvar = "hitesh"
                                            let myvar = true/false
                                            let myvar = null
                                            let myvar = undefined
                                                                    */
console.log (typeof myvar)
console.log (typeof (myvar))

let converted_myvar = Number(myvar)
console.log (typeof (converted_myvar))
console.log (converted_myvar)
console.log (myvar)

// Conclusions: 
// "33" => converted to 33
// "33abc" => converted to Number but that number is NaN (pretty confusing right? Just ratt lo abhi k liye)
// true => 1
// false => 0
// null => 0
// undefined => NaN  (similar to above the type is Number though)


// THUS JS MEI JAB BHI TUM VALUES CONVERT KRO TOH 2 CHIJE JAN-NA JARURI HAI
// 1. Value kis type mei convert hui
// 2. Convert hone k baad uski value kya hai...??

let IsLoggedIn = 1
let BooleanConverted_IsLoggedIn = Boolean(IsLoggedIn)

console.log (typeof BooleanConverted_IsLoggedIn)
console.log (BooleanConverted_IsLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "xyz" => true

let SomeNumber = 35
let StringConverted_SomeNumber = String(SomeNumber)

console.log (typeof SomeNumber)
console.log (typeof StringConverted_SomeNumber)
console.log (SomeNumber)
console.log (StringConverted_SomeNumber)

// Inn sab conversions ko yaad rkhne ki jarurat nahi hai
// Aage aage jaise JS mei kaam karoge toh type-conversion-operarions bahut jyada istemaal hote hai projects mei
// Bss 2 baatein yaad rakhna type-conversion krte waqt hamesha : 
// 1. Value kis type mei convert hui
// 2. Convert hone k baad uski value kya hai...??


/***************************************************************************************OPERATIONS*********************************************************************************/


let value = 3
let negvalue = -value
// console.log (negvalue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/2)
console.log(2%2)

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
console.log (str3)

console.log ("1"+2)
console.log (typeof 2)
console.log (1+"2")
console.log ("1"+2+2)
console.log (1+2+"2")
// Toh ye conversions alag alag kyu ho rahee hai? Koi strings ki trah ho rha hai toh koi numbers ki trah
// Jawab hai: Ye Ecmascript ke specifications k hisaab se ho raha hai.
//            Lekin real life k practical use cases wale codebase mei ye aisa confusing aur ambiguous code likhna bilkul bhi appreciated nahi hai
//            Always make use of parenthesis in such cases and cler cut conversions to avoid ambiguity
/*
Similarly
console.log(+true)
console.log(-"")
etc etc. ye sab cheeje faltu mei dimag kharab mt KeyboardEvent, parenthrsis ka istemaal kro aur apna kaam kro */
