var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
var places_to_visit = ["Tokyo", "Paris", "New York City", "Hong Kong", "London"];
// Printing the array in its original order
console.log("Original order:", places_to_visit);
// Printing the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", __spreadArray([], places_to_visit, true).sort());
// Showing that the array is still in its original order
console.log("Still in original order:", places_to_visit);
// Printing the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", __spreadArray([], places_to_visit, true).sort().reverse());
// Showing that the array is still in its original order
console.log("Still in original order:", places_to_visit);
// Reversing the order of the list
places_to_visit.reverse();
console.log("Reversed order:", places_to_visit);
// Reversing the order of the list again to get back to the original order
places_to_visit.reverse();
console.log("Back to original order:", places_to_visit);
// Sorting the array in alphabetical order
places_to_visit.sort();
console.log("Sorted in alphabetical order:", places_to_visit);
// Sorting the array in reverse alphabetical order
places_to_visit.sort().reverse();
console.log("Sorted in reverse alphabetical order:", places_to_visit);
