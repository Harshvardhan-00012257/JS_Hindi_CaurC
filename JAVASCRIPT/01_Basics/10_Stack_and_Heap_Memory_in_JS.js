/*********************************************************************************************************************************************************************** */
// STACK (PRIMITIVE)    
// Stack memory mei store hone wali cheeje
// are always called by value. i.e. jab bhi unko kahi istemaal kroge, unke andar present value ki fresh copy milegi tumko, aur uss hi pr further operations honge (i.e. orginal location pr changes nahi honge)                                                                                          

let myYoutubename = "hiteshchoudhary"
let anotherName = "ChaiaurCode"
anotherName = myYoutubename

console.log(myYoutubename)                                                      //RECALL THE DIAGRAM MADE BY HITESH SIR
console.log(anotherName)

// HEAP (NON-PRIMITIVE)
//      Heap memory mei store hone wali cheeje 
//      ka hamesha reference prapt hota hai, jaha bhi unko call krte hai
//      Iska matlab jb kisi bhi jagah changes krenge toh original memory mei reflect honge changes.


let userone = {
    email: "user@google.com",
    upi: "mera@ybl"
}
let usertwo = userone
usertwo.email = "chaganka@gmail.com"

console.log(userone.email)
console.log(usertwo.email)