
// Let's get started!
console.log("Let's get started!");

var myVal: number = null;
var result: any = null;

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


// Using a ternary operator to evaluate.
result = (myVal == result) ? 'myVal and result both equal ' + result : 'values are not equal';
console.log(result);