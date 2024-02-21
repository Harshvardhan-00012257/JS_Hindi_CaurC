/*
console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)
*/

// This is easy
// But what happens when we try to compare values from diffrent datattypes?
// console.log ("2" > 1)
// console.log ("02" > 1)
// As we can see a string-value is being comapred to a Number-value, i.e. comparison is being made betn values of different datatypes.
// Such comparisons can give unpredictable results, hence not preferred.(Forget about the results in this particular case)
// Such comparisons arent aloud in TYPESCRIPT 

console.log (null > 0)
console.log (null == 0)         // Null ka matlab hai ekdam khaali, empty (i.e. kucch nahi),  null ka matlab zero nahi hota
console.log (null >= 0)

console.log (undefined > 0)
console.log (undefined == 0)
console.log (undefined >= 0)

// The reason is that an equality check (==) and comparisons (>, <, >=, <=) work differently.
// Comparisons convert null to a number, treating it as 0
// That's the reason why (3) null >= 0  is true
//                      (1) null > 0 is false
// Long story short: "null" ko kabhi NaN kbhi zero ki trh treat kiya krte hai isiliye ambiguous hai, (isiliye avoid kro)
//                   silimalry "undefined" walo ko bhi avoid kro
//                   # REAd_WRITE_PROMOTE_Clean_code


// JS mei ==
//        ===  
//        <, >, <=, >= 
//        inn sab k kam ke=rne ka treeka alag hai (project krte krte samajhne wali cheeje hai ye)


console.log("2" == 2)
console.log("2" === 2)   // "===" strict check