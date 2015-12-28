
// Let's get started!
console.log("Let's get started!");

interface pet {
    name: string;
    age: number;
    weight: number;
}

var myPets: pet[] = [
    { name: 'Sally', age: 18, weight: 85 },
    { name: 'Jasmine', age: 9, weight: 55 },
    { name: 'Rush', age: 15, weight: 45 },
    { name: 'Roxie', age: 6, weight: 85 }
];


var compareAge = function (a: pet, b: pet) {
    if (a.age > b.age) { return -1; }
    if (a.age < b.age) {return 1; }
    return 0;
}

console.log(myPets.sort(compareAge));


// now sort by weight
var compareWeight = function (a: pet, b: pet) {
    if (a.weight > b.weight) { return -1; }
    if (a.weight < b.weight) { return 1; }
    return 0;
}

console.log(myPets.sort(compareWeight));

// TODO: Demonstrate a lodash way of doing this or an ES6 way.
