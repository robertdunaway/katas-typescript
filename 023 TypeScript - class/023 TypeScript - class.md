---
title: 023 TypeScript - class

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

# 023 TypeScript - class

## Duration
10 minutes

## Brief
In this kata we will create a number of classes, access them, and output results.

### For more information 
BING/GOOGLE: “TypeScript class”

## Instructions
Get tutorial folder or the entire katas-typescript repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-typescript/tree/master/023%20TypeScript%20-%20class/before
 - After
  - https://github.com/robertdunaway/katas-typescript/tree/master/023%20TypeScript%20-%20class/after


# Kata

Create a class with three properties.  Declare an object of this new class, set each value, then output the object.

<br>

The result could look something like this
<br>

```typescript
 
    class myBasicClass {
        property1: number;
        property2: string;
        property3: string;
    }

    var x = new myBasicClass();
    x.property1 = 1;
    x.property2 = 'hi';
    x.property3 = 'number one';

    console.log(x);


```

<br>

Create a “Math” class with a function “add” and a constructor that accepts two parameters.  Add the parameters together in the constructor and output the results.

<br>

Create an object of type Math.  Pass in two numbers and check the console for the output.  Call the add function and pass in two parameters.

<br>

> NOTE: Use interpolation instead of the usual string concatenation.

<br>

```typescript

  class Math {
        constructor(a: number, b: number) {
            console.log(`constructor logic: ${(a + b)}`);
        }
        add(a: number, b: number) {
            console.log(`add function: ${(a + b)}`);
        }
    }

    var y: Math = new Math(5, 5);
    y.add(10, 5);


```

<br>

Create a class, “Person”, with the properties “FirstName”, “LastName”, and “Email”.  Add a “fullName” function that combines the first and last name.  

<br>

```typescript

    class Person {
        FirstName: string;
        LastName: string;
        Email: string;
        fullName() { return `${this.FirstName}, ${this.LastName}`}
    }


    var z: Person = new Person();
    z.FirstName = 'Robert';
    z.LastName = 'Dunaway';
    
    var fullName = z.fullName();

    console.log(`full name is: ${fullName}`);


```

<br>

The end result might look something like this.

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/023%20TypeScript%20-%20class/1.png"> 


##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-typescript/master/katas-TS-logo.png" alt="Smiley face" height="200" width="200"> 