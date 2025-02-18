// ARRAY
// it can contain any type of data (dataType) 
// deep copy -> will not change orginal array
// shallow copy -> share same reference means change will be seen in original array 

const numbers = [1,2,3,4,5,6]
const anotherNumber = new Array(1,2,3,4)
console.log(anotherNumber[0]);

numbers.push(10) // append or add 10 
console.log(numbers);
numbers.pop() // remove last value of an array
console.log(numbers);
numbers.unshift(100) // adds number at start but it is not optimal way 
console.log(numbers);
numbers.shift() // removes first elements from array
console.log(numbers);
console.log(numbers.join("-"));

// slice will return the section of an array but doesnot change main array
// splice will return the section of array and also change main array

console.log(numbers.splice(0,3))
console.log(numbers)

/*
Creation and Conversion
Array.from() – Creates a new array from an iterable or array-like object.
Array.of() – Creates a new array with a variable number of arguments, regardless of number or type of arguments.
Array.isArray() – Checks if a value is an array.

Adding/Removing Elements
push() – Adds one or more elements to the end of an array and returns the new length.
pop() – Removes the last element from an array and returns it.
unshift() – Adds one or more elements to the beginning of an array and returns the new length.
shift() – Removes the first element from an array and returns it.
splice(start, deleteCount, ...items) – Adds, removes, or replaces elements in an array.
concat() – Merges two or more arrays and returns a new array.

Accessing and Finding Elements
at(index) – Accesses an element by its index (supports negative indexing).
indexOf(value, fromIndex) – Returns the first index at which a given element can be found.
lastIndexOf(value, fromIndex) – Returns the last index at which a given element can be found.
find(callback) – Returns the first element that satisfies the provided testing function.
findIndex(callback) – Returns the index of the first element that satisfies the provided testing function.
findLast(callback) – Returns the last element that satisfies the provided testing function.
findLastIndex(callback) – Returns the index of the last element that satisfies the provided testing function.
includes(value, fromIndex) – Checks if an array includes a certain value.
Iteration and Transformation
forEach(callback) – Executes a provided function once for each array element.
map(callback) – Creates a new array with the results of calling a function on every element.
filter(callback) – Creates a new array with all elements that pass the test.
reduce(callback, initialValue) – Reduces the array to a single value from left to right.
reduceRight(callback, initialValue) – Reduces the array to a single value from right to left.
Sorting and Reversing
sort(compareFunction) – Sorts the elements of an array in place and returns the array.
reverse() – Reverses the order of the elements in an array in place.
Flattening and Filling
flat(depth) – Creates a new array with all sub-array elements concatenated.
flatMap(callback) – Maps each element using a mapping function, then flattens the result.
fill(value, start, end) – Fills elements with a static value from start to end.
String Conversion and Joining
join(separator) – Joins all elements into a string with a specified separator.
toString() – Returns a string representing the array and its elements.
toLocaleString() – Returns a localized string representing the array.

Other Utility Methods
copyWithin(target, start, end) – Shallow copies part of an array to another location in the same array.
entries() – Returns a new array iterator object that contains key/value pairs.
keys() – Returns a new array iterator containing the keys (indexes).
values() – Returns a new array iterator containing the values.
some(callback) – Checks if at least one element passes the test.
every(callback) – Checks if all elements pass the test.
length – Returns the length of the array.

Static Methods
Array.isArray() – Checks if a value is an array.
Array.from() – Creates a new array from an iterable or array-like object.
Array.of() – Creates a new array from a list of arguments.
*/


let newNum =numbers.concat(anotherNumber)

console.log(newNum)
// spread operators
let newNum2 = [...numbers, ...anotherNumber]
console.log(newNum2)
 let arr = [1,2,3 ,[6,5,4,[10,11,12,12,13]],3]
 console.log(arr.flat(2))// 2 is depth of an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
