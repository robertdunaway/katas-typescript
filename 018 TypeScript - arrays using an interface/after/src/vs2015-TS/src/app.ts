
// Let's get started!
console.log("Let's get started!");


// Create a basic array

var pets: string[] = ['Jasmin', 'Roxie', 'Sally', 'Rush'];

console.log(pets);


// Create a more complex array using an interface to define the name, age, weight of each dog.
interface pet {
    name: string;
    age: number;
    weight: number;
}

// Create an empty array based on the pet interface.
var complexPetsArray: pet[] = [];

// push each dog onto the new array.
complexPetsArray.push({
    name: 'Jasmin',
    age: 9,
    weight: 55
});

// create a new object of type pet and push it onto the array.
var roxie: pet = {
    name: 'Roxie',
    age: 6,
    weight: 85
}

complexPetsArray.push(roxie);

console.log(complexPetsArray);

// create an array of the last two dogs, 'Sally' and 'Rush' then push the array 
// onto the complexPetsArray and output to the console..
var myPets: pet[] = [{ name: 'Sally', age: 18, weight: 85 },
                     { name: 'Rush', age: 15, weight: 45}];

// complexPetsArray.push(myPets);
// We are not allowed to do this but we can use a foreach loop and get it done that way.

// loop over myPets and push each onto the complexPetsArray and output to the console.
for (var p of myPets) {
    complexPetsArray.push(p);
}

console.log(complexPetsArray);