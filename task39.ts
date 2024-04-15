/*
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

*/
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Example usage
let formatted_address: string = city_country("Lahore", "Pakistan");
console.log(formatted_address);
/*Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function citycountry(city: string, country: string): string {
    return( `${city}, ${country}`);
}

// Call the function with three city-country pairs
let address1: string = city_country("Lahore", "Pakistan");
let address2: string = city_country("New York", "USA");
let address3: string = city_country("Paris", "France");

// Print the returned values
console.log(address1);
console.log(address2);
console.log(address3);