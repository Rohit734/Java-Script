//defining function
// function sayMyName () {
//     console.log("Rohit Pradhan")
// }

// sayMyName() // calling Function

// function with Parameter but without return
// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2)
// }

// function with Parameter with return
function addTwoNumbers(number1,number2){
        return number1 + number2
    } 

//  calling function By passing arguments
// console.log(addTwoNumbers(3,4))

function loginUserMessage(userName = "Sam"){ // default value
    if( !userName){ // check if it contains value or not
        console.log("please Enter user name");
        return
    }
    return `Welcome Back ${userName}`
}
// console.log(loginUserMessage());

// function with many parameter (with rest operator ...)
function calculateCartPrice(...num){ 
    return num
}
console.log(calculateCartPrice(1,2,3,4))

// Scope in function

let a = 100
const b = 500
var c = 300

if(true){
    
    let a = 10
    console.log(`inside Scope value of a ${a}`);
    const b = 20
    console.log(`inside Scope value of b ${b}`);
    var c = 30 // does not recreate new variable but instead overwrites the orginal value
    console.log(`inside Scope value of c ${c}`);
}

console.log(`outside Scope value of a ${a}`); // global variable
console.log(`outside Scope value of b ${b}`); // global variable
console.log(`outside Scope value of c ${c}`); // global vaariable but value got changed inside function scope.

// NOTE: var is a global SCOPE whereas let and const is a block SCOPE
