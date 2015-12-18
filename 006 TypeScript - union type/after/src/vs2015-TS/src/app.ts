
// Let's get started!
console.log("Let's get started!");

// declare your union type variable for 3 different types.
var myUnionVar: string | number | boolean;
console.log('myUnionVar before setting a value = ' + myUnionVar);

myUnionVar = 5;
console.log('typeof myUnionVar = ' + typeof myUnionVar);


// Creating a union type with a number and an array of numbers.
var myUnionNumber: number | number[];

myUnionNumber = 100;

if (typeof myUnionNumber === 'number') {
    console.log('myUnionNumber is a number');
}
else {
    console.log('myUnionNumber is now an object');
}

myUnionNumber = [100, 200, 300];

if (typeof myUnionNumber === 'object') {
    console.log('myUnionNumber is now an object');
}
else {
    console.log('myUnionNumber is a number');
}


// use a switch statement around the typeof command.
var myVarType: string = typeof myUnionNumber;

switch (myVarType) {

    case 'number':
        {
            console.log('myUnionNumber is a number');

            break;
        }
    case 'object':
        {
            console.log('myUnionNumber is now an object');

            break;
        }
}

