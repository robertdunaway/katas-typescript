
// Let's get started!
console.log("Let's get started!");

// Create a simple 'add' function.
function add(a: number, b: number): number {
    return a + b;
}
console.log('named function');
console.log('5 + 2 = ' + add(5, 2));

// Create an ananymous 'add' function.
var add2 = function (a: number, b: number): number {
    return a + b;
}
console.log('anonymous function');
console.log('5 + 5 = ' + add2(5, 5));

// Create a function using the arrow function.
var add3 = (a: number, b: number): number => {
    return a + b;
}
console.log('arrow function');
console.log('10 + 5 = ' + add3(10, 5));
