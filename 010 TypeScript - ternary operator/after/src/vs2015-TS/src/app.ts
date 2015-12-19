
// Let's get started!
console.log("Let's get started!");

var myVal: number = null;
var result: number = null;

// using an if statement
if (myVal == null) {
    result = 0;
}
else {
    result = myVal;
}
console.log('result = ' + result);

// Using a ternary operator to check for null.
result = myVal ? myVal : 0;
console.log('result = myVal ? myVal : 0; // result = ' + result);

myVal = 5;
result = myVal ? myVal : 0;
console.log('result = myVal ? myVal : 0; // result = ' + result);

