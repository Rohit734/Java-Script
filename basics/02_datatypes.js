"use strict"; // this will treat all JS code as newer version

// alert("Hello") // this will throw error because we are using node js not web browser

let name = "Rohit" // string
let age = 24 // integer
let isLoggedIn = false // boolen
// bigint 
// null => stand alone value or type
//undefine => is a type when variable is define but value is not define
// symbole => it is used to find an unique component or a unique
// object 

// typeof() will find or provide the type of the value or variable

console.log(typeof undefined);


/* 
----------------------summary--------------------------

1 -> Primitive DATATYPE (call by value orginal data is not changed only the copy is changed )
there are 7 type they are as follows:
String
Number
Bollean
null
undefined
Symbol - used to make some data unique
BigInt

2 -> Non Primitive (Reference type we can change value directly in the address) 
there are three type they are as follows.
Array
Object
Function

*/ 

console.log("-------------SYMBOL------------");

let id = Symbol("123")
let anotherId = Symbol("123")
console.log(id);
console.log(anotherId);
console.log(id === anotherId);


console.log("-------------Non Primitive (Reference type)------------");

let names = ['abc','ram','sam'];

let myObject = {a : names,
    b : "r",
}
 // we can store function in a variable also

 const myFun = function(){
    console.log("HI i am Function");
    
 }