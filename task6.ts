/*Q6Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/
let person_name = "\t\n   Governor Sindh   \n\t";
console.log(`Original name: "${person_name}"`);
console.log(`Stripped name: "${person_name.trim()}"`);