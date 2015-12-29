
// Let's get started!
console.log("Let's get started!");

// -----------------------------------------
    // Wrap this simple function in IIFE
    function add(a: number, b: number): number {
        return a + b;
    }
    console.log('5 + 2 = ' + add(5, 2));
// -----------------------------------------



// add is not recognized here.
//console.log('5 + 2 = ' + add(5, 2));




// -----------------------------------------
    // Wrap this function in IIFE
    var add2 = function (a: number, b: number): number {
        return a + b;
    }
    console.log('anonymous function');
    console.log('5 + 5 = ' + add2(5, 5));
// -----------------------------------------




// -----------------------------------------
    // Wrap this function in IIFE
    var add3 = (a: number, b: number): number => {
        return a + b;
    }
    console.log('arrow function');
    console.log('10 + 5 = ' + add3(10, 5));

// -----------------------------------------




// -----------------------------------------
    // Wrap this function in IIFE
    var profile = function (fName: string, lName: string, age?: number
        , height?: number, weight?: number): string {

        // String interpolation
        console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);

        return '';
    }
    console.log('all parameters are required');
    profile('John', 'Smith', 35, 180, 165);

// -----------------------------------------




// -----------------------------------------
    // Wrap this function in IIFE
    var profileWithOptions = function (fName: string, lName: string, age?: number
        , height?: number, weight?: number): string {

        // String interpolation
        console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);

        return '';
    }
    console.log('example of optional parameters');
    profileWithOptions('John', 'Smith');
// -----------------------------------------




// -----------------------------------------

    // Wrap this function in IIFE
    var profileWithDefaults = function (fName: string, lName: string, age: number = 18
        , height: number = 150, weight: number = 100): string {

        // String interpolation
        console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`);

        return '';
    }
    console.log('example of default parameters');
    profileWithDefaults('John', 'Smith');
// -----------------------------------------




// -----------------------------------------
    // Wrap this function in IIFE
    for (var index: number = 0; index < 10; index++) {
        console.log(index);
    }
// -----------------------------------------



// -----------------------------------------
    // Wrap this function in IIFE
    var myNumber: number = 5;
    for (var multiplier = 1; multiplier <= 10; multiplier++) {
        var result = myNumber * multiplier;

        console.log(`${myNumber} * ${multiplier} = ${result}`);
    }

// -----------------------------------------