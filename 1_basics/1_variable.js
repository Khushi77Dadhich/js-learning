const accountId = 144553
let accountEmail = "khushidadhich202@gmail.com"
var accountEmailPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed 


accountEmail = "dadhich202khushi@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var 
because of issue in the block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);