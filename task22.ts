/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/
let favorite_colors = ["blue", "green", "red"];

// Accessing an index that is out of bounds to intentionally produce an error
console.log(favorite_colors[3]); // This line will produce an index error

// Correcting the error by accessing an existing index
console.log(favorite_colors[2]); // This line accesses the last element in the array
