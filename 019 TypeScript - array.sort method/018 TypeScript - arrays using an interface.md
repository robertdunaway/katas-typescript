---
title: 019 TypeScript - array.sort method

tags: 
- AngularJS
- Gulp
- Bower
- npm
- nodejs
- github
- Visual Studio Code
- JavaScript
- TypeScript

---

###http://robertdunaway.github.io

##[TypeScript code kata list](http://mycodekatas.github.io/typescript.html)
##[All code kata lists](http://mycodekatas.github.io/)

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 

# 019 TypeScript - array.sort method

## Duration
10 minutes

## Brief
Creating a sorter for an array.

### For more information 
BING/GOOGLE: “TypeScript array sort”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/019%20TypeScript%20-%20array.sort%20method/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/019%20TypeScript%20-%20array.sort%20method/after


# Kata

Create a simple interface.

<br>

interface pet {
    name: string;
    age: number;
    weight: number;
}

<br>

Popular a new array based on the new interface.

<br>

var myPets: pet[] = [
    { name: 'Sally', age: 18, weight: 85 },
    { name: 'Jasmine', age: 9, weight: 55 },
    { name: 'Rush', age: 15, weight: 45 },
    { name: 'Roxie', age: 6, weight: 85 }
];

<br>

Create a comparer based on age.

<br>

var compareAge = function (a: pet, b: pet) {
    if (a.age > b.age) { return -1; }
    if (a.age < b.age) {return 1; }
    return 0;
}

<br>

Output the sorted array to the console.

<br>

console.log(myPets.sort(compareAge));

<br>

Create a comparer based on weight.

<br>

var compareWeight = function (a: pet, b: pet) {
    if (a.weight > b.weight) { return -1; }
    if (a.weight < b.weight) { return 1; }
    return 0;
}

<br>

Output the sorted array to the console.

<br>

console.log(myPets.sort(compareWeight));


<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/019%20TypeScript%20-%20array.sort%20method/1.png" alt="Smiley face"> 

##Next
Take a few minutes and imagine more examples. 

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 