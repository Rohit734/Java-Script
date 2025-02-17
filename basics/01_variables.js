const accountId = 1445 // constant will not change 
let accountEmail = "rohit734@gmail.com" 
/* creating variable and always use let over var because 
it has scope problem (block and functional scope)

By default : if value is not provided to variable then it is of undefine type
*/
var accountPassword = "12345"
accountCity = "Namchi"

console.log(accountId);
accountEmail = "abcd@gmail.com"
accountPassword = "54321"

console.table([accountEmail, accountId, accountPassword, accountCity])
