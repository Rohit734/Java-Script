// singleTon
// const user = new Object()

const user = {}
user.id = 123
user.name = "Sam"
user.isLoggedIn = true

// console.log(user);

const user2 = {
    email: "gpt@gmail.com",
    fullName: {
        userFullName: {
            first: "Sam",
            last: "Rai"
        }
    },
}

// console.log(user2.fullName.userFullName.first)
// // using ?
// console.log(user2.fullName?.userFullName.first)

// Combining objects using asssign

const obj = {1:"a",2:"4"}
const obj1 = {3:"a",4:"4"}
const obj2 = Object.assign({},obj,obj1)
console.log(obj2)

// Combining objects using Spread operator (...)
const obj3 = {...obj,...obj1}
console.log(obj3)
// getting keys 
console.log(Object.keys(user)) 
// getting Values 
console.log(Object.values(user)) 
console.log(user.hasOwnProperty("email"));

