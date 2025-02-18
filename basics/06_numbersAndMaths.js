const score = 400
console.log(score)
const amount = new Number(400) // defining variable type manualy
console.log(amount) 
console.log(amount.toString());
console.log(amount.toFixed(2)); // give two decimal number
let anotherNumber = 123.8966
console.log(anotherNumber.toPrecision(3));
console.log(anotherNumber.toPrecision(4));
const hundreds = 100000
console.log(anotherNumber.toLocaleString('en-IN')) // puts commas in indian system by default it uses us systen

console.log()
console.log("-----------------Maths LIB -------------")
console.log()
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.sqrt(25));
console.log(Math.pow(2,4));

console.log(Math.random()); // value is always between 0-1
console.log((Math.random()*10)+1);

let min = 10
let max = 20

console.log(Math.floor(Math.random()*(max-min +1)) + min) // random number between two number





