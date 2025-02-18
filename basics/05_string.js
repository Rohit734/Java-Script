// string manipulation

let name = "Rohit"
let age = 24

console.log(`Hello my name is ${name} and my age is ${age}`);

let name2 = new String("Ram")
console.log(name.length);
console.log(name2.charAt(2))
console.log(name2.slice(0,2));

/*

1. Character Access and Information
charAt(index) – Returns the character at the specified index.
charCodeAt(index) – Returns the Unicode of the character at the specified index.
codePointAt(index) – Returns the Unicode code point at the given position.
length – Returns the length of the string.
2. String Manipulation
concat(string1, string2, ...) – Combines two or more strings.
slice(start, end) – Extracts a section of a string and returns it as a new string.
substring(start, end) – Returns the part of the string between the start and end indexes.
substr(start, length) – Returns a substring, starting at the specified position and having the specified length (deprecated, but still used).
replace(searchValue, newValue) – Replaces a substring or pattern with a new value.
replaceAll(searchValue, newValue) – Replaces all occurrences of a substring or pattern.
repeat(count) – Returns a new string with a specified number of copies of the original string.
trim() – Removes whitespace from both ends of the string.
trimStart() / trimLeft() – Removes whitespace from the start of the string.
trimEnd() / trimRight() – Removes whitespace from the end of the string.
padStart(targetLength, padString) – Pads the current string from the start with another string.
padEnd(targetLength, padString) – Pads the current string from the end with another string.
3. Case Conversion
toLowerCase() – Converts the string to lowercase.
toUpperCase() – Converts the string to uppercase.
toLocaleLowerCase() – Converts to lowercase, considering the host's current locale.
toLocaleUpperCase() – Converts to uppercase, considering the host's current locale.
4. Searching and Matching
indexOf(searchValue, fromIndex) – Returns the first occurrence of a specified value.
lastIndexOf(searchValue, fromIndex) – Returns the last occurrence of a specified value.
includes(searchValue, fromIndex) – Checks if a string contains a specified value.
startsWith(searchValue, position) – Checks if a string starts with a specified value.
endsWith(searchValue, length) – Checks if a string ends with a specified value.
match(regex) – Searches for a match between a regular expression and the string.
matchAll(regex) – Returns an iterator of all matched results.
search(regex) – Searches for a match and returns the index of the match.
5. Splitting and Joining
split(separator, limit) – Splits a string into an array of substrings.
join(separator) – Joins an array of strings into a single string (used with arrays, not directly on strings).
6. Other Utility Functions
valueOf() – Returns the primitive value of a String object.
toString() – Returns a string representing the specified object.

 */