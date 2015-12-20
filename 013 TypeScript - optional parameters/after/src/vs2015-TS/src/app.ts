
// Let's get started!
console.log("Let's get started!");

// Create a function that accepts several parameters.
// These parameters are required by default.
var profile = function (fName: string, lName: string, age?: number
    , height?: number, weight?: number): string {

    // String interpolation
    console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);

    return '';
}
console.log('all parameters are required');
profile('John', 'Smith', 35, 180, 165);


// Create a function where only fName and lName are required and the rest
// are optional.
var profileWithOptions = function (fName: string, lName: string, age?: number
    , height?: number, weight?: number): string {

    // String interpolation
    console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);

    return '';
}
console.log('example of optional parameters');
profileWithOptions('John', 'Smith');


// Create function with default parameters.
var profileWithDefaults = function (fName: string, lName: string, age: number = 18
    , height: number = 150, weight: number = 100): string {

    // String interpolation
    console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);

    return '';
}
console.log('example of default parameters');
profileWithDefaults('John', 'Smith');
profile('John', 'Smith', 35, 180, 165);