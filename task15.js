/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/
var guestList = ["Ali", "Baby", "Aina", "Saima", "Noman"];
var unabletoattend = "Ali";
var newguest = "Nuzhat";
// Removing the guest who can't attend
var updatedguestList = guestList.filter(function (person) { return person !== unabletoattend; });
// Adding a new guest
updatedguestList.push(newguest);
// Printing invitations to each person on the updated guest list
updatedguestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner. Please join us."));
});
// Printing the name of the guest who can't make it
console.log("".concat(unabletoattend, " can't make it to the dinner."));
