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

