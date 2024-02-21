// What is the goal of learning JS (Keep Project oriented approach to learn things)
// What is variable and what is its need
// const vs let vs var
// let vs var

/* please please please 
    prefer not to use "var"
    because of its issue in block-scope and functional-scope of the variable    
*/

const accountId = 1144553
let accountEmail = "meihu@gmail.com"
var accountPassword = "12345"
 accountCity = "Pune"
let accountState;

// accountId = 2  // not allowed (since the variable is const variable)

accountEmail = "meinahihu@gmail.com"
accountPassword = "21456315"
accountCity = "Bangalore"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
