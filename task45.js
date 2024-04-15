/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function storeCarInfo(manufacturer: string, model: string, ...options: { [key: string]:any }): { manufacturer: string, model: string, options: { [key: string]: any } } {
    let carInfo: { manufacturer: string, model: string, options: { [key: string]: any } } = {
        manufacturer: manufacturer,
        model: model,
        options: options
    };

    return carInfo;
}

// Call the function with required information and two other name-value pairs
let carInfo = storeCarInfo("Toyota", "Camry", color: "blue", year: 2022);

// Print the object returned to ensure all information was stored correctly
console.log(carInfo);*/
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["Color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["Color", "Blue"], ["sunroof", true]));
