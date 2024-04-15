/*Q 3Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
let personName: string = "Iffat ul Fatima";
let lowercaseName: string = personName.toLowerCase();
let uppercaseName: string = personName.toUpperCase();
let titlecaseName: string = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();

console.log("Original Name: " + personName);
console.log("Lowercase Name: " + lowercaseName);
console.log("Uppercase Name: " + uppercaseName);
console.log("Titlecase Name: " + titlecaseName);