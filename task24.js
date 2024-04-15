/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
var names = "Iffat";
var age = 25;
var numbers = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Is name equal to 'Iffat'? I predict True.");
console.log(names == "Iffat");
console.log("Is name not equal to 'Ana'? I predict True.");
console.log(names != "Ana");
// Tests using the lower case function
console.log("Is name in lowercase equal to 'iffat'? I predict True.");
console.log(names.toLowerCase() == "iffat");
// Numerical tests
console.log("Is age equal to 25? I predict True.");
console.log(age == 25);
console.log("Is age not equal to 30? I predict True.");
console.log(age != 30);
console.log("Is age greater than 20? I predict True.");
console.log(age > 20);
console.log("Is age less than or equal to 25? I predict True.");
console.log(age <= 25);
// Tests using "and" and "or" operators
console.log("Is age greater than 20 and less than 30? I predict True.");
console.log(age > 20 && age < 30);
console.log("Is age greater than 30 or less than 20? I predict False.");
console.log(age > 30 || age < 20);
// Test whether an item is in an array
console.log("Is 3 in the numbers array? I predict True.");
console.log(numbers.includes(3));
// Test whether an item is not in an array
console.log("Is 6 not in the numbers array? I predict True.");
console.log(!numbers.includes(6));
