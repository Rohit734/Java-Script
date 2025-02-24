// singleton -> object created using constrocter
// const jsUser = Object.Create // singleton object
// object literals

const mySymbol = Symbol("key1")

const jsUser = {
    "full name" : "Rohit pradhan",
    first: "Rohit",
    last : "Pradhan",
    age : 24,
    email : "email@gmail.com",
    phone : 9876543021,
    [mySymbol] : "key1" // syntax to use symbol as a key in objects 
} //objcet 

/*

// accessing object two way
// one with dot
console.log(jsUser.age);
// two using [] bracket
console.log(jsUser["full name"]);
console.log(jsUser[mySymbol]) // accessing symbol using [] but we dont use ""

// changing or updating value in objects

jsUser.email = "chatGpt@gmail.com"
Object.freeze(jsUser) // now value will not change
jsUser.email = "Gpt@gmail.com"

console.log(jsUser)
 */

jsUser.greeting = function (){
    console.log("Hello!!!")
}

jsUser.greetingTwo = function (){
    console.log(`Hello!!!, ${this["full name"]}`) // using this we can reference to self objects
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



