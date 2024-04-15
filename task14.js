/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
var guestlist = ["Ali", "Baby", "Aina", "Saima", "Noman"];
// Printing invitations to each person on the guest list
guestlist.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are invited to dinner. Please join us."));
});
